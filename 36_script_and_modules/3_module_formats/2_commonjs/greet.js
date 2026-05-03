// greet.js (CommonJS Module)

// CommonJS is a module system that was created for use in Node.js, which was introduced in 2009.
// It allows you to export and import modules using `module.exports` and `require` respectively.
// CommonJS is synchronous, meaning that modules are loaded at runtime in the order they are required.

module.exports = function (name) {
  return `Hello, ${name}!`;
};

/*
Explanation:
- This file defines a function using CommonJS syntax.
- The function is exported using `module.exports`, which makes it available for import in other files.
- The `module.exports` statement is part of the CommonJS module system, which is widely used in Node.js environments.
- CommonJS was created to standardize module systems in JavaScript before the advent of ES6 modules.
*/
