#!/bin/bash
set -o errexit
set -o nounset
set -o pipefail

# The output of this is checked into the repository. You should not need to run it.
# Running it will update to the latest revision of the spec.

rm -rf ecma262
git clone https://github.com/tc39/ecma262.git --depth=1
rm -rf ecma262/.git
