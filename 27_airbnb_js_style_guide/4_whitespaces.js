// ===============================
// FUNCTION DEFINITIONS
// ===============================

// Airbnb recommends no spaces inside the parameter list and a space before the function body.
function functionWithDefaultParam(defaultParameter = 5) {
    return defaultParameter;
}

// ===============================
// ASSIGNMENTS
// ===============================

// Use spaces around assignment operators.
const x = 3;
let y = 2;

// ===============================
// OPERATORS
// ===============================

// Recommended: Use spaces around operators for readability.
if (x > 5 && x % 2 === 0) {
    console.log('x is larger than 5 and divisible by 2!');
}

// Not recommended: Inconsistent spacing.
if (x>5 && x%2===0) {
    console.log('x is larger than 5 and divisible by 2!');
}

// ===============================
// EXPRESSIONS
// ===============================

// Consistent spacing in complex expressions.
const a = x ** 2 + 5;
const b = (x + y) * (x - y);
