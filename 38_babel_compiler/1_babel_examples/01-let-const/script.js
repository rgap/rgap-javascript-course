// ES6 let and const
// let and const provide block-scoping for variables, unlike var which has function-scoping.

// Before Babel transformation (ES6)
let name = "John";
const age = 30;

console.log(name, age);

// After Babel transformation (ES5)
// "use strict";

// var name = "John";
// var age = 30;

// console.log(name, age);
