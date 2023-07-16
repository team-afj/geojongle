#!/bin/sh

echo "Looking for address: $1"
DATA=$(python3 -c "import urllib.parse, sys; print(urllib.parse.quote(sys.argv[1]))" "$1")
URL="https://nominatim.openstreetmap.org/?addressdetails=1&q=${DATA}&format=json&limit=1"
curl ${URL} | jq
