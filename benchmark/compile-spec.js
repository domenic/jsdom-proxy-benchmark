"use strict";
const path = require("path");
const { JSDOM } = require("jsdom");
const { Spec } = require("ecmarkup");

// NOTE: this script relies on private (undocumented) Ecmarkup APIs. It may break after Ecmarkup
// upgrades, even of patch versions. It is assembled by basically reverse-engineering what the
// ecmarkup command line tool does.

// This is only ever called trying to fetch the bibliography data. Ecmarkup fetches the ECMAScript
// spec bibliography data even for the ECMAScript spec itself. But, doing so isn't necessary, and
// doesn't impact the output very much. (It seems to cause the sequential IDs to change by one,
// somehow.) So we can get away with just returning an empty JSON object.
function dummyFetch() {
  return Promise.resolve("{}");
}

module.exports = async (input) => {
  const dom = new JSDOM(input, { includeNodeLocations: true });
  const inputPath = path.resolve(__dirname, "../ecma262/index.html");
  const options = {
    date: new Date("2017-08-30T00:00:00Z") // needed to ensure deterministic output
  };
  const spec = new Spec(inputPath, dummyFetch, dom, options, input);

  await spec.build();
  return spec.toHTML();
};
