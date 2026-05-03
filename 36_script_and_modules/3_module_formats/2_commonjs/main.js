// main.js (CommonJS Usage)

// CommonJS was introduced in 2009 alongside Node.js to provide a standardized module system for server-side JavaScript.
// The `require` function is used to import modules in CommonJS.
// The `require` function is synchronous, meaning it blocks execution until the module is loaded.

const greet = require("./greet.js"); // Import the greet module using `require`
console.log(greet("World")); // Call the greet function and log the result to the console

/*
Explanation:
- This file demonstrates how to import and use a CommonJS module.
- The `require` function is used to import the `greet` function from greet.js.
- The `greet` function is then called with the argument 'World' and the result is logged to the console.
- CommonJS is primarily used in Node.js environments, which is why this script should be run using Node.js.
*/

// Run this with Node.js using the command: node main.js
