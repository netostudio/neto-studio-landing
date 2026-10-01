.PHONY: up down build restart logs sh clean test-contact

-include .env
export

PAGES_PORT ?= 8788
# Endpoint used by test-contact. Defaults to the local Cloudflare Pages runtime
# (pages service); use CONTACT_URL=http://localhost:4321/api/contact to test
# through astro dev.
CONTACT_URL ?= http://localhost:$(PAGES_PORT)/api/contact

# Starts web (astro dev on :4321) and pages (Cloudflare runtime on :8788).
up:
	docker compose up -d

down:
	docker compose down

build:
	docker compose build

# Also rebuilds the static site served by pages.
restart:
	docker compose restart

logs:
	docker compose logs -f

sh:
	docker compose exec web sh

clean:
	docker compose down -v
	rm -rf node_modules dist .astro .wrangler

# Sends one real test submission through /api/contact. It reaches Make, so it
# creates a lead in Holded and sends the notification email. The lead is named
# [BORRAR] so it is easy to find and delete.
test-contact:
	curl -sS -w '\nHTTP %{http_code}\n' -X POST $(CONTACT_URL) \
		--data-urlencode 'name=[BORRAR]' \
		--data-urlencode 'email=test@neto.studio' \
		--data-urlencode 'role=IT Manager' \
		--data-urlencode 'message=Test submission from make test-contact' \
		--data-urlencode 'privacy=accepted' \
		--data-urlencode 'lang=es'
