// greet.js

// Simple module to demonstrate Browserify bundling
// This module exports a function that returns a greeting message using CommonJS syntax

/*
Explanation:
- This file defines a simple CommonJS module that exports a function.
- The function takes a name as an argument and returns a greeting message.
- CommonJS modules use the `module.exports` syntax to export functions, objects, or primitives.
- This syntax is commonly used in Node.js and can be bundled for the browser using tools like Browserify.
*/

module.exports = function (name) {
  return `Hello, ${name}!`;
};
