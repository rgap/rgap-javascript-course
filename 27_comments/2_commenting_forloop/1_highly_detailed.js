// Example 1: Highly Detailed (Stating the Obvious)

// Initialize an empty array to store squares.
let squares = [];
// Loop through numbers 0 to 9.
for (let x = 0; x < 10; x++) {
  // Calculate the square of x.
  let square = x * x;
  // Add the calculated square to the array.
  squares.push(square);
}

// Print the array of squares.
// Expected output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
console.log(squares);
