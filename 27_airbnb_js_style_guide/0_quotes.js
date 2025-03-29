// ===============================
// STRING QUOTES
// ===============================

/*
 * Airbnb Style Guide Recommendation:
 * - Prefer single quotes for string literals.
 * - Use double quotes only when a string contains single quotes and you want to avoid escaping.
 * - Template literals (backticks) are acceptable for string interpolation or multi-line strings.
 */

// Correct: Using single quotes when possible.
const greeting = 'Hello, world!';

// Correct: Using double quotes to avoid escaping a single quote.
const message = "It's a beautiful day!";

// Incorrect: Using double quotes unnecessarily. Should use single quotes.
const wrongGreeting = "Hello, world!"; // Linter may warn: Use single quotes instead.

// Correct: Using template literals for interpolation or multi-line strings.
const name = 'Alice';
const welcomeMessage = `Welcome, ${name}!`;

console.log(greeting);
console.log(message);
console.log(wrongGreeting);
console.log(welcomeMessage);
