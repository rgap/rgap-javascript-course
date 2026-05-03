// main.js (UMD Usage)

// This file demonstrates how to use the UMD module defined in greet.js.
// It checks for AMD, CommonJS, and browser global environments to use the `greet` function accordingly.

if (typeof define === "function" && define.amd) {
  // AMD (Asynchronous Module Definition)
  require(["./greet"], function (greet) {
    console.log(greet("World"));
  });
} else if (typeof module === "object" && module.exports) {
  // CommonJS
  const greet = require("./greet");
  console.log(greet("World"));
} else {
  // Browser globals
  console.log(greet("World"));
}

/*
Explanation:
- This file demonstrates how to use the UMD module defined in greet.js.
- It checks for AMD, CommonJS, and browser global environments to use the `greet` function accordingly.
- If AMD is detected, the `require` function is used to load the `greet` module asynchronously.
- If CommonJS is detected, the `require` function is used to load the `greet` module synchronously.
- If neither AMD nor CommonJS is detected, it assumes a browser environment and uses the global `greet` function.
*/
