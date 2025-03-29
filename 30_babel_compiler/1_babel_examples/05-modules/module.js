// ES6 Modules
// ES6 modules allow you to import and export variables, functions, and classes between different files.

// Before Babel transformation (ES6)
export const greet = name => `Hello, ${name}!`;

// After Babel transformation (ES5)
// "use strict";

// Object.defineProperty(exports, "__esModule", {
//   value: true,
// });
// exports.greet = void 0;

// var greet = function greet(name) {
//   return "Hello, " + name + "!";
// };

// exports.greet = greet;
