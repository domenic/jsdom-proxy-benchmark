#!/bin/bash
set -o errexit
set -o nounset
set -o pipefail

rm -rf out
mkdir out

node_modules/.bin/ecmarkup --verbose ecma262/spec.html out/index.html
