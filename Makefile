.PHONY: up down build restart logs sh clean build-prod run-prod

-include .env
export

IMAGE_NAME := neto-landing
PROD_PORT ?= 8080

up:
	docker compose up -d

down:
	docker compose down

build:
	docker compose build

restart:
	docker compose restart

logs:
	docker compose logs -f

sh:
	docker compose exec web sh

clean:
	docker compose down -v
	rm -rf node_modules dist .astro

build-prod:
	docker build -f Dockerfile.prod --build-arg PUBLIC_CALENDLY_URL=$(PUBLIC_CALENDLY_URL) -t $(IMAGE_NAME):prod .

run-prod:
	docker run --rm -p $(PROD_PORT):80 --name $(IMAGE_NAME)-prod $(IMAGE_NAME):prod
