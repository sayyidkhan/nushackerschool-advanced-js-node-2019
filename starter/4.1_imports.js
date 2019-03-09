//
// Demo of require
//

// 1. File extension is optional, usually removed.
// 2. Relative path ("./") must be used to import any files not in node_modules
// (covered later in NPM segment).
const importedValue = require("./4.2_export_value");
// Equivalent statement in import syntax (not supported in Node):
// import importedValue from "./4.2_export_value";

const customLogger = require("./4.3_export_function");

const math = require("./4.4_export_object");
const { add, subtract, pi } = math; // Object destructuring
// Equivalent to:
// const { add, subtract, pi } = require("./4.4_export_object");

customLogger(importedValue, math);
customLogger(add(pi, pi), subtract(pi, pi));
