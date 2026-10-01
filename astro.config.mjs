import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';
import { rename, rmdir } from 'node:fs/promises';

// In production a Cloudflare Pages Function forwards /api/contact to the Make
// webhook (see functions/api/contact.ts). `astro dev` does not run Pages
// Functions, so mirror that proxy here.
const { MAKE_WEBHOOK_URL, MAKE_WEBHOOK_APIKEY } = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');
const contactProxy = MAKE_WEBHOOK_URL
  ? {
      '/api/contact': {
        target: new URL(MAKE_WEBHOOK_URL).origin,
        changeOrigin: true,
        rewrite: () => new URL(MAKE_WEBHOOK_URL).pathname,
        headers: { 'x-make-apikey': MAKE_WEBHOOK_APIKEY ?? '' },
      },
    }
  : undefined;

// Cloudflare Pages serves the closest 404.html up the path (es/404.html for
// /es/...). Astro only emits a flat 404.html for the root 404 page, so move
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
    plugins: [tailwindcss()],
    server: {
      proxy: contactProxy,
    },
  },
});
