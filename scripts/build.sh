#!/bin/sh

yarn exec -- esbuild $1 --bundle --minify --outdir=dist \
    --loader:.png=empty --allow-overwrite src/js/main.js

cp -r "node_modules/leaflet/dist/images" dist/
