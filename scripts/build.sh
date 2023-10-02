#!/bin/sh

cp -r "node_modules/leaflet/dist/images" dist/leaflet-images

yarn exec -- esbuild $1 --bundle --minify --outdir=dist \
    "--external:*.png" --allow-overwrite src/js/main.ts
