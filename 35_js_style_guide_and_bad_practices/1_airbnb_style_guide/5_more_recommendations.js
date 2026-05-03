// ===============================
// BOOLEAN COMPARISONS
// ===============================

const isGreater = 6 > 5;

// Not recommended: Explicit comparison to true.
if (isGreater === true) {
  console.log('6 is greater than 5');
}

// Recommended: Use the Boolean value directly.
if (isGreater) {
  console.log('6 is greater than 5');
}

// ===============================
// CHECKING EMPTY ARRAYS
// ===============================

// In JavaScript, an empty array is truthy, so check the length.
const myArray = [];
if (myArray.length === 0) {
  console.log('Array is empty');
}

// ===============================
// NULL AND UNDEFINED CHECKS
// ===============================

let value = null;

// Not recommended: Loose equality may lead to unintended results.
if (value == null) {
  console.log('Value is null or undefined');
}

// Recommended: Use strict equality for clarity.
if (value === null) {
  console.log('Value is null');
}

// ===============================
// STRING METHODS
// ===============================

const word = 'mycat';

// Not recommended: Using substring to check the start of a string.
if (word.substring(0, 3) === 'cat') {
  console.log('Word starts with "cat"');
}

// Recommended: Using startsWith() for clarity.
if (word.startsWith('cat')) {
  console.log('Word starts with "cat"');
}
