"use strict";
const path = require("path");
const fs = require("fs");

const inputPath = path.resolve(__dirname, "../ecma262/spec.html");
const inputString = fs.readFileSync(inputPath, { encoding: "utf-8" });

const outputString = `"use strict";

module.exports = \`${escapeForTemplateString(inputString)}\`;
`;

// The output of this script is the input to the benchmark, hence the filename here.
const outputPath = path.resolve(__dirname, "../benchmark/input.js");
fs.writeFileSync(outputPath, outputString);

function escapeForTemplateString(inputString) {
  return inputString.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}
