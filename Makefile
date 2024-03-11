install:
	npm install

run:
	k6 run full_test.js

docker:
	docker compose run --rm -T k6 run -<samples/full_test.js --tag testid=full

lint:
	npm run lint

fix:
	npm run lint -- --fix

up:
	docker compose up -d