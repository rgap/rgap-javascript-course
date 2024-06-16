// ES6 Arrow Functions
// Arrow functions provide a shorter syntax for writing function expressions.

// Before Babel transformation (ES6)
const greet = name => `Hello, ${name}!`;

// Usage example
console.log(greet("world"));

// After Babel transformation (ES5)
// "use strict";

// var greet = function greet(name) {
//   return "Hello, " + name + "!";
// };

// console.log(greet("world"));
