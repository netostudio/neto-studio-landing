import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';
import { rename, rmdir } from 'node:fs/promises';

// In production the Cloudflare Worker forwards /api/contact to the Make
// webhook (see worker/index.ts). `astro dev` does not run the Worker, so
// mirror it here. This is a dev middleware rather than a Vite `server.proxy`:
// Astro's configureServer post hook moves its trailingSlash check to the front
// of the middleware stack, so with trailingSlash 'always' a proxied
// /api/contact would answer 404. With enforce 'post', this plugin's post hook
// runs after Astro's, so its unshift puts this middleware first.
const { MAKE_WEBHOOK_URL, MAKE_WEBHOOK_APIKEY } = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');
const contactDevProxy = {
  name: 'contact-dev-proxy',
  apply: 'serve',
  enforce: 'post',
  configureServer: (server) => () => {
    const { logger } = server.config;
    server.middlewares.stack.unshift({
        route: '/api/contact',
      handle: async (req, res) => {
        const reply = (status) => {
          res.statusCode = status;
          res.setHeader('Cache-Control', 'no-store');
          res.end();
        };
        if (req.method !== 'POST') return reply(405);
        if (!MAKE_WEBHOOK_URL || !MAKE_WEBHOOK_APIKEY) {
          logger.error('MAKE_WEBHOOK_URL or MAKE_WEBHOOK_APIKEY is not set');
          return reply(500);
        }

        const chunks = [];
        for await (const chunk of req) chunks.push(chunk);
        try {
          const make = await fetch(MAKE_WEBHOOK_URL, {
            method: 'POST',
            headers: {
              'content-type': req.headers['content-type'] ?? 'application/x-www-form-urlencoded',
              'x-make-apikey': MAKE_WEBHOOK_APIKEY,
            },
            body: Buffer.concat(chunks),
          });
          if (!make.ok) logger.error(`Make webhook responded ${make.status}`);
          reply(make.ok ? 200 : 502);
        } catch (err) {
          logger.error(`Make webhook request failed: ${err}`);
          reply(502);
        }
      },
    });
  },
};

// Cloudflare serves the closest 404.html up the path (es/404.html for /es/...,
// see not_found_handling in wrangler.jsonc). Astro only emits a flat 404.html for the root 404 page, so move
// the localized one from es/404/index.html to es/404.html after the build.
const localized404 = {
  name: 'localized-404',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      for (const locale of ['es']) {
        const from = new URL(`${locale}/404/index.html`, dir);
        await rename(from, new URL(`${locale}/404.html`, dir));
        await rmdir(new URL(`${locale}/404/`, dir));
      }
    },
  },
};

export default defineConfig({
  site: 'https://neto.studio',
  output: 'static',
  // Canonical URLs end with a slash (directory build format), so internal
  // links must too, otherwise each page is reachable under two URLs.
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es' },
      },
      // Legal and 404 pages are noindex (see their Layout props), so keep them out.
      filter: (page) => !/\/(privacy|terms|404)\/$/.test(page),
    }),
    localized404,
  ],
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss(), contactDevProxy],
  },
});
