// ES6 Template Literals
// Template literals provide an easier way to create multi-line strings and include variables within strings.

// Before Babel transformation (ES6)
const name = "John";
const message = `Hello, ${name}! How are you today?`;

console.log(message);

// After Babel transformation (ES5)
// "use strict";

// var name = "John";
// var message = "Hello, " + name + "! How are you today?";

// console.log(message);
