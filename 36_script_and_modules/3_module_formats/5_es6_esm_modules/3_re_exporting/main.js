// ECMAScript Modules (ESM)
// main.js
import { farewell, greet, greetFormally } from "./greetings.js";

console.log(greet("World")); // Hello, World!
console.log(greetFormally("Dr.", "Smith")); // Good day, Dr. Smith.
console.log(farewell("World")); // Goodbye, World!

/*
Explanation:
- This file demonstrates importing re-exported modules.
- The `greet`, `greetFormally`, and `farewell` functions are imported from greetings.js and then called.
*/
