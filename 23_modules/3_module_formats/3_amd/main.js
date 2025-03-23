// main.js (AMD Usage)

// AMD (Asynchronous Module Definition) was introduced in 2010 to handle asynchronous module loading in browsers.
// The `require` function is used to load AMD modules asynchronously.
// The `require` function takes an array of module dependencies and a callback function that is executed once the modules are loaded.

require(["./greet"], function (greet) {
  console.log(greet("World")); // Call the greet function and log the result to the console
});

/*
Explanation:
- This file demonstrates how to use an AMD module.
- The `require` function is used to load the `greet` module asynchronously.
- The `require` function takes an array of module dependencies (in this case, `./greet`) and a callback function.
- The callback function is executed once the `greet` module is loaded, and the `greet` function is called with the argument 'World'.
- AMD was widely used in the browser before the advent of ES Modules (ESM).
*/
