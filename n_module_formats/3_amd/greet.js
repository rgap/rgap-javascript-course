// greet.js (AMD Module)

// AMD (Asynchronous Module Definition) is a module system for JavaScript that was introduced in 2010.
// It was designed for use in the browser to load modules asynchronously.
// The `define` function is used to define an AMD module.
// The `define` function takes two arguments: an array of dependencies and a factory function that returns the module.

define([], function () {
  return function (name) {
    return `Hello, ${name}!`;
  };
});

/*
Explanation:
- This file defines a function using AMD syntax.
- The `define` function is used to define the `greet` module.
- The `define` function takes an array of dependencies (empty in this case) and a factory function that returns the module.
- AMD was designed to allow asynchronous loading of modules in the browser, improving performance by loading only the necessary modules.
*/
