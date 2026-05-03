// Example 1: Highly Detailed (Stating the Obvious)

/**
 * A simple calculator class that performs basic arithmetic operations.
 *
 * @class Calculator
 * @description This class provides methods for addition and subtraction.
 */
class Calculator {
  /**
   * Adds two numbers together.
   *
   * @param {number} a - The first number to add.
   * @param {number} b - The second number to add.
   * @returns {number} The sum of a and b.
   *
   * @example
   * const result = calculator.add(5, 3); // returns 8
   */
  add(a, b) {
    return a + b;
  }

  /**
   * Subtracts the second number from the first.
   *
   * @param {number} a - The number to subtract from.
   * @param {number} b - The number to subtract.
   * @returns {number} The result of a minus b.
   *
   * @example
   * const result = calculator.subtract(5, 3); // returns 2
   */
  subtract(a, b) {
    return a - b;
  }
}

// Example usage:
const calculator = new Calculator();
console.log(calculator.add(5, 3)); // Should print 8
