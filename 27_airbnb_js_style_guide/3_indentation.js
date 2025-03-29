// ===============================
// INDENTATION
// ===============================

// Airbnb style uses 2 spaces per indentation level.

// Correct indentation:
function exampleFunction(param1, param2) {
    if (param1 > param2) {
    console.log('param1 is greater');
    } else {
    console.log('param2 is greater or equal');
    }
}
    
// Incorrect indentation: Inconsistent use of spaces.
function badIndentation(param1, param2) {
        if (param1 > param2) {
            console.log('param1 is greater');
        } else {
        console.log('param2 is greater or equal');
        }
}
