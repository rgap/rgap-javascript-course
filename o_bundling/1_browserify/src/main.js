// main.js

// Importing the greet module using CommonJS syntax

/*
Explanation:
- This file imports the greet function from the greet.js module using CommonJS require syntax.
- CommonJS modules use the `require` function to import modules.
- The `greet` function is called with the argument 'World' and the result is logged to the console.
- This syntax is commonly used in Node.js and can be bundled for the browser using tools like Browserify.
*/

const greet = require("./greet.js");
console.log(greet("World"));
