#!/bin/bash
set -o errexit
set -o nounset
set -o pipefail

cd "$(dirname "$0")/.."

./node_modules/.bin/browserify benchmark/benchmark.js > benchmark/single-file.js
