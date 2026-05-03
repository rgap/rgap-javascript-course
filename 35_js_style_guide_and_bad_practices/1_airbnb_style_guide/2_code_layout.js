// ===============================
// BLANK LINES AND CODE LAYOUT
// ===============================

// Airbnb recommends using blank lines to separate top-level functions and logical sections.

// Two blank lines between top-level function declarations:
function firstFunction() {
    return 'First Function';
}


function secondFunction() {
    return 'Second Function';
}

// Within a function, use blank lines to separate logical steps.
function calculateSomething(numbers) {
    const total = numbers.reduce((sum, num) => sum + num, 0);

    // Calculate the average.
    const average = total / numbers.length;

    return { total, average };
}

// ===============================
// IMPORTS
// ===============================

// In JS, imports belong at the top of the file (when using modules).
import React from 'react';
import { render } from 'react-dom';

// ===============================
// FUNCTION CALLS
// ===============================

// When calling functions with multiple arguments, line breaks can improve readability.
const result = calculateSomething([
    1,
    2,
    3,
    4,
    5,
]);

console.log(result);
