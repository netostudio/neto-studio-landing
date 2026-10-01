.PHONY: up down build restart logs sh clean build-prod run-prod up-prod logs-prod check-contact-env test-contact

-include .env
export

IMAGE_NAME := neto-landing
PROD_PORT ?= 8080
# Endpoint used by test-contact. Defaults to the prod container; use
# CONTACT_URL=http://localhost:4321/api/contact to test through astro dev.
CONTACT_URL ?= http://localhost:$(PROD_PORT)/api/contact

up:
	docker compose up -d

down:
	docker compose --profile prod down

build:
	docker compose build

restart:
	docker compose restart

logs:
	docker compose logs -f

sh:
	docker compose exec web sh

clean:
	docker compose --profile prod down -v
	rm -rf node_modules dist .astro

build-prod:
	docker build -f Dockerfile.prod --build-arg PUBLIC_CALENDLY_URL=$(PUBLIC_CALENDLY_URL) -t $(IMAGE_NAME):prod .

run-prod: check-contact-env
	docker run --rm -p $(PROD_PORT):80 -e MAKE_WEBHOOK_URL -e MAKE_WEBHOOK_APIKEY --name $(IMAGE_NAME)-prod $(IMAGE_NAME):prod

# Builds and starts the production stack (nginx + /api/contact proxy) in the
# background on http://localhost:$(PROD_PORT).
up-prod: check-contact-env
	docker compose --profile prod up -d --build prod

logs-prod:
	docker compose --profile prod logs -f prod

# nginx refuses to start without these, so fail early with a clear message.
check-contact-env:
	@test -n "$(MAKE_WEBHOOK_URL)" || { echo "MAKE_WEBHOOK_URL is empty, set it in .env"; exit 1; }
	@test -n "$(MAKE_WEBHOOK_APIKEY)" || { echo "MAKE_WEBHOOK_APIKEY is empty, set it in .env"; exit 1; }

# Sends one real test submission through the proxy. It reaches Make, so it
# creates a lead in Holded and sends the notification email.
test-contact:
	curl -sS -w '\nHTTP %{http_code}\n' -X POST $(CONTACT_URL) \
		--data-urlencode 'name=Test neto.studio' \
		--data-urlencode 'email=test@neto.studio' \
		--data-urlencode 'role=IT Manager' \
		--data-urlencode 'message=Test submission from make test-contact' \
		--data-urlencode 'privacy=accepted' \
		--data-urlencode 'lang=es'
