dev:
	scripts/build.sh --watch

fmt:
	yarn exec -- prettier . --write
