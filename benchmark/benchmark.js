"use strict";
const input = require("./input.js");
const outputForVerifying = require("./output-for-verifying.js");
const compileSpec = require("./compile-spec.js");

const beforeTime = Date.now();

compileSpec(input).then(output => {
  if (output !== outputForVerifying) {
    throw new Error("Incorrect output");
  }
})
.then(
  () => {
    const afterTime = Date.now();
    console.log("Success: " + (afterTime - beforeTime) + " ms");
  },
  e => {
    console.error("Failure: " + e.stack);
  }
);
