// script2.js

// Accessing and using the function defined in script1.js
console.log(greet("JavaScript")); // Using the function from script1.js

// Overwriting the global variable defined in script1.js
var myVar = "overwritten";
console.log(myVar); // Output: 'overwritten'

// Overwriting the global function defined in script1.js
function myFunction() {
  console.log("This function overwrites the previous one.");
}

myFunction(); // Output: 'This function overwrites the previous one.'

/*
Explanation:
- This JavaScript file accesses the greet function defined in script1.js.
- It then overwrites the global variable myVar and the global function myFunction defined in script1.js.
- This demonstrates how global scope pollution can lead to variables and functions being accidentally overwritten.
*/
