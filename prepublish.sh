#!/bin/bash

rm -rf dist
mkdir dist
npm run build
rm joshWebsite.js
mv joshWebsite.min.js ./dist
