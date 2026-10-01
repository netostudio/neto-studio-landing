# CLAUDE.md

Guidance for working in this repo (neto.studio landing page). See also README.md for Docker/dev setup.

## Stack
- Astro 5 (`output: 'static'`), Tailwind CSS 4 via `@tailwindcss/vite` (CSS-first config: `src/styles/global.css` does `@import 'tailwindcss'; @config '../../tailwind.config.mjs';` - not the `@astrojs/tailwind` integration)
- Astro's native i18n: `en` (default, served at `/`) and `es` (served at `/es/`)
- Strict TypeScript (`astro/tsconfigs/strict`)
- Hosted on Cloudflare Pages (static build + Pages Functions in `functions/`, headers in `public/_headers`). Functions use inline types, not `@cloudflare/workers-types`, since `astro check` type-checks them too. Never add `wrangler` to `package.json`: the Pages build then mixes esbuild versions and fails to compile Functions; it is installed globally in `Dockerfile.pages` only.
- No tests, no linter/formatter configured, no CI

## Component conventions
- `src/components/*.astro`, PascalCase, one component per landing section.
- Standard pattern: every component fetches its own copy with
  `const lang = getLangFromUrl(Astro.url); const t = useTranslations(lang);`
  - translations are not passed via props. Follow this pattern in new components.
- Almost no component uses typed `Props` (exception: `RiskBadge.astro`, which defines `interface Props`). Only type props if the component actually needs them.
- Tailwind utility classes only, no scoped `<style>` blocks.
- `Contact.astro` posts (via `fetch`) to `/api/contact`. There is no app backend: in production a Cloudflare Pages Function (`functions/api/contact.ts`) forwards that path to a Make webhook, and in `astro dev` the Vite proxy in `astro.config.mjs` does the same. Make creates the lead in Holded and sends the notification email; that logic lives in the Make scenario, not in this repo.

## i18n - adding text or pages
- Source of truth: `src/i18n/en.ts` (defines the `Dictionary` type via an explicit type annotation + values). `src/i18n/es.ts` must satisfy that same type.
- To add a new string: add the key to `en.ts` (type + value), then the same key to `es.ts`. TypeScript fails the build if `es` doesn't satisfy `Dictionary`.
- To add a new page: create it under `src/pages/`, then duplicate it under `src/pages/es/`, adjusting only the relative import depth (`../` → `../../`). There's no generator or shared abstraction between the two versions - this duplication is intentional; keep following it unless a refactor is explicitly decided.
- Utilities in `src/i18n/utils.ts`: `getLangFromUrl`, `useTranslations`, `getLocalizedPath` (used by `LanguagePicker.astro` for the language switcher).

## Styling / brand
- Light theme by default: `paper` background (#f4f4f5), `ink` text (#09090b), tokens defined in `tailwind.config.mjs` (`ink`, `paper`, `muted`, `crimson`). CTA buttons deliberately invert this pair (`bg-ink text-paper`) to stand out against the light page.
- Accent color: `crimson` token is `#ff3131`, used sparingly (ProblemSection card icons, RiskBadge CRITICAL variant). Don't overuse it - it is meant to stay a small highlight, not a dominant color.
- Subtle borders/surfaces use black-tinted opacity utilities (`border-black/10`, `bg-black/[0.02]`, etc.) rather than a gray token.
- Font: Inter Variable, self-hosted via `@fontsource-variable/inter`.
- Logo: `public/neto-logo.svg` (black wordmark, used in `Header.astro`). `public/neto-logo-white.svg` (white wordmark) exists unused, kept in reserve for a future dark surface (e.g. footer).
- Other accent colors outside the brand tokens (`emerald-500`, `amber-500`, etc.) are used straight from Tailwind's palette in specific components (e.g. `RiskBadge`) - if a recurring new color is needed, consider promoting it to a token in `tailwind.config.mjs`.

## Environment variables
- `PUBLIC_CALENDLY_URL`: if empty, scheduling CTAs fall back to scrolling to `#contact` instead of linking to Calendly/Cal.com. Since it's `PUBLIC_*`, Astro inlines it at build time - on Cloudflare Pages it is a build environment variable; locally the `pages` and `web` services read it from `.env`.
- `MAKE_WEBHOOK_URL`, `MAKE_WEBHOOK_APIKEY`: runtime secrets for the contact form proxy, never `PUBLIC_*` and never build variables. On Cloudflare Pages they are encrypted secrets read by the Function; locally `wrangler pages dev` (`pages` service) reads them from the mounted `.env` by itself - never pass them as command line arguments, they would leak into logs. If they are missing, `/api/contact` answers 500.

## Code styling
- Every comment and variable name must be in English.
- Avoid the use of any character that is not in a normal keyboard (i.e. emdashes, arrows, etc.)

## Build/verification
- `npm run build` runs `astro check && astro build` - any type error (including `es.ts` not satisfying `Dictionary`) breaks the build.
- Validate through Docker, not npm on the host: `make up` starts `web` (astro dev, :4321) and `pages` (build + `wrangler pages dev`, :8788, the production runtime). `make restart` rebuilds what `pages` serves; `make logs` shows the build output.
- No test suite to run.