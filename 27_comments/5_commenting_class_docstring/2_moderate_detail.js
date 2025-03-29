// Example 2: Moderate Detail (Focusing on Intent)

/**
 * Calculator class for performing basic arithmetic.
 */
class Calculator {
  /**
   * Returns the sum of two numbers.
   * @param {number} a - First number.
   * @param {number} b - Second number.
   * @returns {number} Sum of a and b.
   */
  add(a, b) {
    return a + b;
  }

  /**
   * Returns the difference between two numbers.
   * @param {number} a - Number to subtract from.
   * @param {number} b - Number to subtract.
   * @returns {number} Difference of a and b.
   */
  subtract(a, b) {
    return a - b;
  }
}

// Example usage:
const calc = new Calculator();
console.log(calc.add(5, 3));
