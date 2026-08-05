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
- Node.js 20+ and npm, for local development without Docker

## Getting started with Docker (recommended)

```bash
cp .env.example .env
docker compose up --build
```

The site is available at:

- English: [http://localhost:4321](http://localhost:4321)
- Spanish: [http://localhost:4321/es](http://localhost:4321/es)

The source code is mounted as a volume, so changes to `src/` hot-reload without rebuilding the image.

Useful `Makefile` commands:

```bash
make up        # docker compose up --build
make down      # docker compose down
make logs      # follow the container logs
make sh        # open a shell inside the container
```

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

## Project structure

```
src/
  i18n/          # translation dictionaries (en.ts, es.ts) and helpers
  layouts/       # Layout.astro: <head>, SEO, hreflang, OpenGraph
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
public/
  favicon.svg
```

## Production build

```bash
npm run build
npm run preview
```

`npm run build` runs `astro check` (type validation) followed by `astro build`, generating the static site into `dist/`.

## Production Docker image

For deployment, `Dockerfile.prod` builds the static site and serves it with Nginx instead of the dev server:

```bash
make build-prod   # docker build -f Dockerfile.prod ...
make run-prod     # serves the image on http://localhost:8080
```

`PUBLIC_CALENDLY_URL` is read from `.env` and baked into the static HTML at build time, since Astro inlines `PUBLIC_*` variables during `astro build`.
