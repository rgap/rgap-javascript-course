// greet.js (UMD Module)

// UMD (Universal Module Definition) is a module format that aims to work in multiple environments: AMD, CommonJS, and as a global variable in the browser.
// UMD was introduced around 2011 to provide compatibility and flexibility in module usage across different environments.
// This module format is particularly useful for libraries that need to support both server-side and client-side JavaScript.

// The IIFE (Immediately Invoked Function Expression) is used to create the module.
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD (Asynchronous Module Definition)
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS
    module.exports = factory();
  } else {
    // Browser globals (root is usually `window`)
    root.greet = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  // The factory function that returns the module
  return function (name) {
    return `Hello, ${name}!`;
  };
});

/*
Explanation:
- This file defines a UMD module that can be used in different environments.
- The IIFE ensures that the module can be immediately invoked and used.
- The `define` function is used for AMD, allowing asynchronous module loading.
- The `module.exports` is used for CommonJS, enabling synchronous module loading in Node.js.
- The `root.greet` assigns the factory function to a global variable for use in the browser.
- UMD provides flexibility and compatibility, making the module usable in various JavaScript environments.
*/
