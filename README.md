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
| `worker` | [http://localhost:8788](http://localhost:8788) | The static build plus the Worker behind `/api/contact`, served by `wrangler dev` with `wrangler.jsonc`, exactly as it runs on Cloudflare. It builds on start, so run `make restart` to see new changes. |

The source code is mounted as a volume, so changes to `src/` hot-reload in `web` without rebuilding the image.

Useful `Makefile` commands:

```bash
make up            # docker compose up -d (web + worker)
make down          # docker compose down
make restart       # restart both services (worker rebuilds the site)
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
browser -> POST /api/contact -> Worker (max 16 KB, adds x-make-apikey) -> Make webhook
        -> filter -> Holded "Create a Contact" (type lead) -> notification (Slack)
```

- **Production**: `worker/index.ts` runs as a Cloudflare Worker only for `/api/*` (static pages never invoke it) and reads `MAKE_WEBHOOK_URL` and `MAKE_WEBHOOK_APIKEY` from the Worker secrets. If they are missing it answers 500. Per-IP rate limiting is a Cloudflare rate limiting rule (see "Deployment").
- **Local**: the `worker` service runs the same Worker with `wrangler dev`, and `astro dev` (`web` service) proxies `/api/contact` the same way (see `astro.config.mjs`). Both read the variables from `.env`.
- `make test-contact` sends one real submission to `http://localhost:8788/api/contact`: it creates a lead named `[BORRAR]` in Holded and sends the notification. Delete the lead afterwards.
- The Holded and Slack credentials live only in the Make scenario.

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
worker/
  index.ts            # Cloudflare Worker behind /api/* (contact form proxy)
wrangler.jsonc        # Cloudflare Workers config (production and local)
public/
  _headers            # static asset headers (long cache for /_astro/)
  robots.txt
  og-image.png        # social preview images (1200x630), one per language
  og-image-es.png
  favicon.svg
```

## Production build

`npm run build` runs `astro check` (type validation) followed by `astro build`, generating the static site into `dist/`. Locally, the `worker` service runs it on every start (see `make logs`). `PUBLIC_CALENDLY_URL` is inlined into the HTML at build time; `MAKE_WEBHOOK_*` are never part of the build.

## Deployment (Cloudflare Workers)

The site is the Cloudflare Worker `neto-studio` with static assets, connected to this GitHub repository through Workers Builds. Every push to `main` deploys to production. `wrangler.jsonc` holds the configuration (Worker name, compatibility date, assets, routing); the dashboard only holds the build settings and the variables.

The `workers.dev` URL is disabled (`"workers_dev": false`), so the deployed site is only reachable once `neto.studio` points to the Worker (steps 2 and 3). Until then, test locally with `make up`.

### 1. Worker settings

1. Cloudflare dashboard > Workers & Pages > Create application > Import a repository, and pick this repository. The Worker name must be `neto-studio-landing`, the `name` in `wrangler.jsonc`; otherwise the build fails.
2. Build settings: build command `npm run build`, deploy command `npx wrangler deploy`, root directory empty. The Node version comes from `.nvmrc`.
3. Variables. Build and runtime variables are separate in Workers, and each one only exists where it is defined:
   - `PUBLIC_CALENDLY_URL`: Settings > **Build** > Variables and secrets (it is inlined into the HTML at build time; a runtime variable is not visible to the build).
   - `MAKE_WEBHOOK_URL` and `MAKE_WEBHOOK_APIKEY`: Settings > **Variables & Secrets**, type **Secret** (read by the Worker at runtime). Same values as in your `.env`; they never go into the repository.
4. Changing a variable does not affect the current deployment: redeploy (or push) afterwards.

### 2. Move the DNS of neto.studio to Cloudflare

The domain stays registered at Squarespace; only its nameservers move. Cloudflare needs the zone to serve `neto.studio` from the Worker and to apply the redirect and rate limiting rules.

1. Squarespace > Domains > neto.studio > DNS: **turn DNSSEC off**. Wait until the DS record is gone (`Resolve-DnsName neto.studio -Type DS` returns no answer; up to 24-48 h). Switching nameservers while DNSSEC is on breaks the whole domain, email included.
2. Cloudflare > Add a domain > `neto.studio` > Free plan. Review the imported records:
   - Keep the 5 Google Workspace `MX` records (`aspmx.l.google.com` and `alt1` to `alt4`) and the `TXT` `google-site-verification`. Without the MX records, email to `info@neto.studio` stops arriving.
   - Delete the Squarespace `A` records of `neto.studio` and the `www` `CNAME` to `ext-sq.squarespace.com`; the Worker custom domains create their own records in step 3.
3. Squarespace: replace the nameservers with the two Cloudflare gives you. Wait until Cloudflare shows the zone as Active.
4. Optional: re-enable DNSSEC from Cloudflare (DNS > Settings) and add the DS record it shows in Squarespace.

### 3. Custom domain, redirect and rate limiting

1. Worker `neto-studio-landing` > Settings > Domains & Routes > Add > Custom domain: add `neto.studio` and `www.neto.studio`.
2. Rules > Redirect Rules: create a rule from the "Redirect from WWW to root" template (301, preserving path and query string).
3. Security > WAF > Rate limiting rules: one rule matching `URI Path equals /api/contact` and `Request Method equals POST`, counted per IP. On the Free plan the period is 10 seconds (for example, 2 requests per 10 s), looser than a per-minute limit but enough to stop floods.

### 4. After going live

- Send the contact form on `https://neto.studio` (or `make test-contact CONTACT_URL=https://neto.studio/api/contact`) and delete the `[BORRAR]` lead in Holded afterwards.
- Google Search Console: verify `neto.studio` and submit `https://neto.studio/sitemap-index.xml`.
- Google Rich Results Test on the home page (JSON-LD) and LinkedIn Post Inspector (social preview images).
