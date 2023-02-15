install: 
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

fix:
	npx eslint --fix .

pretty:
	npx prettier --write .