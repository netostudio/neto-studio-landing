# neto.studio - Landing

Multilingual (English / Spanish) corporate website for neto.studio, built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

## Stack

- **Astro 5** (static site, `output: 'static'`)
- **Tailwind CSS 4** via `@tailwindcss/vite`
- **Astro native i18n**: English at `/`, Spanish at `/es/`
- **lucide-astro** for icons
- **Inter** (self-hosted with `@fontsource-variable/inter`)

## Requirements

- Docker and Docker Compose (recommended), **or**
- Node.js 24+ and npm, for local development without Docker

## Getting started with Docker (recommended)

```bash
cp .env.example .env
docker compose up --build
```

This starts two services:

| Service | URL | What it is |
| ------- | --- | ---------- |
| `web`   | [http://localhost:4321](http://localhost:4321) (Spanish at `/es/`) | `astro dev` with hot reload. Use it while developing. |
| `pages` | [http://localhost:8788](http://localhost:8788) | The static build served by `wrangler pages dev`, with the `/api/contact` Function, exactly as it runs on Cloudflare Pages. It builds on start, so run `make restart` to see new changes. |

The source code is mounted as a volume, so changes to `src/` hot-reload in `web` without rebuilding the image.

Useful `Makefile` commands:

```bash
make up            # docker compose up -d (web + pages)
make down          # docker compose down
make restart       # restart both services (pages rebuilds the site)
make logs          # follow the container logs
make sh            # open a shell inside the web container
make test-contact  # send one real test submission (lead named [BORRAR])
```

`node_modules` lives in an anonymous volume per container, which `make up` reuses. After changing dependencies or the Node version, recreate it with `make down && make build && make up`.

## Local development without Docker

```bash
npm install
npm run dev
```

## Environment variables

Copy `.env.example` to `.env` and adjust:

| Variable               | Description                                                                                                                       |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `PUBLIC_CALENDLY_URL`   | Scheduling URL (Calendly, Cal.com, etc.) for the "Schedule Diagnostic" / "Agendar Diagnóstico" CTAs. If left empty, those CTAs scroll to the contact section instead. |
| `MAKE_WEBHOOK_URL`      | Make webhook that receives contact form submissions. Runtime secret, see "Contact form" below.                                     |
| `MAKE_WEBHOOK_APIKEY`   | API key configured on that Make webhook. Runtime secret, see "Contact form" below.                                                  |

## Contact form

The form in `Contact.astro` posts to `/api/contact` on the same domain. The browser never sees the Make webhook URL or its API key:

```
browser -> POST /api/contact -> Pages Function (max 16 KB, adds x-make-apikey) -> Make webhook
        -> filter -> Holded "Create a Contact" (type lead) -> notification email (SMTP)
```

- **Production**: `functions/api/contact.ts` runs as a Cloudflare Pages Function and reads `MAKE_WEBHOOK_URL` and `MAKE_WEBHOOK_APIKEY` from the project secrets. If they are missing it answers 500. Per-IP rate limiting is a Cloudflare rate limiting rule (see "Deployment").
- **Local**: the `pages` service runs the same Function with `wrangler pages dev`, and `astro dev` (`web` service) proxies `/api/contact` the same way (see `astro.config.mjs`). Both read the variables from `.env`.
- `make test-contact` sends one real submission to `http://localhost:8788/api/contact`: it creates a lead named `[BORRAR]` in Holded and sends the notification email. Delete the lead afterwards.
- The Holded and SMTP credentials live only in the Make scenario.

## Project structure

```
src/
  i18n/          # translation dictionaries (en.ts, es.ts) and helpers
  layouts/       # Layout.astro: <head>, SEO, hreflang, OpenGraph, JSON-LD
  components/    # Header, Hero, MetricsBar, ProblemSection, ServicesCatalog,
                 # AuditPreview, Contact, Footer, LanguagePicker, RiskBadge
  pages/
    index.astro       # English landing page (default locale)
    privacy.astro
    terms.astro
    es/
      index.astro      # Spanish landing page
      privacy.astro
      terms.astro
functions/
  api/contact.ts      # Cloudflare Pages Function behind /api/contact
public/
  _headers            # Cloudflare Pages headers (asset caching, noindex on pages.dev)
  robots.txt
  og-image.png        # social preview images (1200x630), one per language
  og-image-es.png
  favicon.svg
```

## Production build

`npm run build` runs `astro check` (type validation) followed by `astro build`, generating the static site into `dist/`. Locally, the `pages` service runs it on every start (see `make logs`). `PUBLIC_CALENDLY_URL` is inlined into the HTML at build time; `MAKE_WEBHOOK_*` are never part of the build.

## Deployment (Cloudflare Pages)

The site is a Cloudflare Pages project connected to this GitHub repository. Every push to `main` deploys to production; other branches get preview deployments on `*.pages.dev` (kept out of search results by `public/_headers`).

### 1. Create the Pages project

1. Cloudflare dashboard > Workers & Pages > Create > Pages > Connect to Git, and pick this repository.
2. Build settings: framework preset **Astro**, build command `npm run build`, output directory `dist`. The Node version comes from `.nvmrc`.
   Then Settings > Runtime > Compatibility date: set it to the `COMPATIBILITY_DATE` in `Dockerfile.pages`, so the Function runs the same locally and in production.
3. Settings > Variables and Secrets, for both Production and Preview:
   - `PUBLIC_CALENDLY_URL` as a plain variable (inlined at build time).
   - `MAKE_WEBHOOK_URL` and `MAKE_WEBHOOK_APIKEY` as **secrets** (encrypted). Same values as in your `.env`; they never go into the repository.
4. Redeploy, open the `*.pages.dev` URL and send the contact form (or `make test-contact CONTACT_URL=https://<project>.pages.dev/api/contact`). Delete the `[BORRAR]` lead in Holded afterwards.

### 2. Move the DNS of neto.studio to Cloudflare

The domain stays registered at Squarespace; only its nameservers move. Cloudflare needs the zone to serve the apex domain (`neto.studio`) from Pages and to apply the redirect and rate limiting rules.

1. Squarespace > Domains > neto.studio > DNS: **turn DNSSEC off**. Wait until the DS record is gone (`Resolve-DnsName neto.studio -Type DS` returns no answer; up to 24-48 h). Switching nameservers while DNSSEC is on breaks the whole domain, email included.
2. Cloudflare > Add a domain > `neto.studio` > Free plan. Review the imported records:
   - Keep the 5 Google Workspace `MX` records (`aspmx.l.google.com` and `alt1` to `alt4`) and the `TXT` `google-site-verification`. Without the MX records, email to `info@neto.studio` stops arriving.
   - Delete the Squarespace `A` records of `neto.studio` and the `www` `CNAME` to `ext-sq.squarespace.com`; Pages creates its own in step 3.
3. Squarespace: replace the nameservers with the two Cloudflare gives you. Wait until Cloudflare shows the zone as Active.
4. Optional: re-enable DNSSEC from Cloudflare (DNS > Settings) and add the DS record it shows in Squarespace.

### 3. Custom domain, redirect and rate limiting

1. Pages project > Custom domains: add `neto.studio` and `www.neto.studio`.
2. Rules > Redirect Rules: create a rule from the "Redirect from WWW to root" template (301, preserving path and query string).
3. Security > WAF > Rate limiting rules: one rule matching `URI Path equals /api/contact` and `Request Method equals POST`, counted per IP. On the Free plan the period is 10 seconds (for example, 2 requests per 10 s), looser than a per-minute limit but enough to stop floods.

### 4. After going live

- Google Search Console: verify `neto.studio` and submit `https://neto.studio/sitemap-index.xml`.
- Google Rich Results Test on the home page (JSON-LD) and LinkedIn Post Inspector (social preview images).
