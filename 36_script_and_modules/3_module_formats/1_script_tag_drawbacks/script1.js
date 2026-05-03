// script1.js

// Defining a function in the global scope
function greet(name) {
  return "Hello, " + name + "!";
}

// Defining a global variable
var myVar = "global";

// Defining a global function
function myFunction() {
  console.log("This is a global function.");
}

/*
Explanation:
- This JavaScript file defines a function greet, a variable myVar, and a function myFunction in the global scope.
- These variables and functions are accessible to any other script included after this one.
- This can lead to potential conflicts if other scripts define variables or functions with the same names.
*/
