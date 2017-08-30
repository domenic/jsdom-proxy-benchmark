"use strict";
const path = require("path");
const fs = require("fs");
const compileSpec = require("../benchmark/compile-spec.js");

const specPath = path.resolve(__dirname, "../ecma262/spec.html");
const specString = fs.readFileSync(specPath, { encoding: "utf-8" });

convertToJS(specString, path.resolve(__dirname, "../benchmark/input.js"));

compileSpec(specString).then(outputString => {
  convertToJS(outputString, path.resolve(__dirname, "../benchmark/output-for-verifying.js"));
});

function convertToJS(inputString, outputPath) {
  const outputString = `"use strict";

module.exports = \`${escapeForTemplateString(inputString)}\`;
`;

  fs.writeFileSync(outputPath, outputString);
};

function escapeForTemplateString(inputString) {
  return inputString.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}
