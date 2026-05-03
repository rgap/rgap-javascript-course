/**
 * THEORY: DEFER SCRIPT EXECUTION
 * Because this file was loaded using <script defer src="app.js">,
 * the browser guarantees that it will execute this code ONLY after 
 * the DOM tree has been fully built.
 * 
 * Therefore, we don't need any wrapper functions or event listeners!
 * We can directly select elements with 100% confidence they exist.
 */

console.log("Running app.js - HTML is guaranteed to be ready.");
const myElement = document.getElementById("id");
myElement.innerHTML = "Hello World (Modern Defer Method)";
