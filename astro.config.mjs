import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

// In production nginx proxies /api/contact to the Make webhook (see
// nginx.conf.template). `astro dev` has no nginx, so mirror that proxy here.
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

export default defineConfig({
  site: 'https://neto.studio',
  output: 'static',
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
