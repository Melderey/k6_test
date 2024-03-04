run:
	k6 run test.js

lint:
	npm run lint

fix:
	npm run lint -- --fix