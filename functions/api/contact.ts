// Cloudflare Pages Function for POST /api/contact.
// Forwards contact form submissions to the Make webhook, adding the webhook
// API key server-side so neither the URL nor the key reach the browser. Make
// creates the lead in Holded and sends the notification email.
// Per-IP rate limiting is a Cloudflare rate limiting rule (see README).

interface Env {
  MAKE_WEBHOOK_URL?: string;
  MAKE_WEBHOOK_APIKEY?: string;
}

const MAX_BODY_BYTES = 16 * 1024;

function reply(status: number): Response {
  return new Response(null, { status, headers: { 'Cache-Control': 'no-store' } });
}

// Any other method. Without this, Pages falls through to the static assets.
export const onRequest = () =>
  new Response(null, { status: 405, headers: { Allow: 'POST', 'Cache-Control': 'no-store' } });

export const onRequestPost =async ({ request, env }: { request: Request; env: Env }) => {
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
};
