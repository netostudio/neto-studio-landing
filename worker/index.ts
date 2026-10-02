// Cloudflare Worker for neto.studio. Static assets (dist/) are served by
// Cloudflare without invoking this script; it only runs for /api/* (see
// run_worker_first in wrangler.jsonc).
//
// POST /api/contact forwards contact form submissions to the Make webhook,
// adding the webhook API key server-side so neither the URL nor the key reach
// the browser. Make creates the lead in Holded and sends the notification.
// Per-IP rate limiting is a Cloudflare rate limiting rule (see README).
//
// Types are declared inline instead of using @cloudflare/workers-types,
// since `astro check` type-checks this file too.

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  MAKE_WEBHOOK_URL?: string;
  MAKE_WEBHOOK_APIKEY?: string;
}

const MAX_BODY_BYTES = 16 * 1024;

function reply(status: number, headers: Record<string, string> = {}): Response {
  return new Response(null, { status, headers: { 'Cache-Control': 'no-store', ...headers } });
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') {
    return reply(405, { Allow: 'POST' });
  }

  if (!env.MAKE_WEBHOOK_URL || !env.MAKE_WEBHOOK_APIKEY) {
    console.error('MAKE_WEBHOOK_URL or MAKE_WEBHOOK_APIKEY is not set');
    return reply(500);
  }

  if (Number(request.headers.get('content-length') ?? 0) > MAX_BODY_BYTES) {
    return reply(413);
  }
  const body = await request.arrayBuffer();
  if (body.byteLength > MAX_BODY_BYTES) {
    return reply(413);
  }

  try {
    const res = await fetch(env.MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'content-type': request.headers.get('content-type') ?? 'application/x-www-form-urlencoded',
        'x-make-apikey': env.MAKE_WEBHOOK_APIKEY,
        'x-forwarded-for': request.headers.get('cf-connecting-ip') ?? '',
      },
      body,
    });
    if (!res.ok) {
      console.error(`Make webhook responded ${res.status}`);
      return reply(502);
    }
    return reply(200);
  } catch (err) {
    console.error('Make webhook request failed', err);
    return reply(502);
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname === '/api/contact') {
      return handleContact(request, env);
    }
    // Any other /api/* path: let the assets layer answer with the 404 page.
    return env.ASSETS.fetch(request);
  },
};
