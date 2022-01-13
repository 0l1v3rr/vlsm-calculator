#!/usr/bin/env -S bash

npm run build
git add public -f
git commit -m "add public"
git subtree push --prefix public origin gh-pages