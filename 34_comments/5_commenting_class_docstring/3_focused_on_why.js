// Example 3: Focused on the "Why" (Minimal Stating of the Obvious)

/**
 * Calculator class for basic arithmetic operations.
 *
 * This class demonstrates simple arithmetic methods and focuses on why these operations are needed.
 */
class Calculator {
  /**
   * Adds two numbers.
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @returns {number} The sum of a and b.
   */
  add(a, b) {
    return a + b;
  }

  /**
   * Subtracts b from a.
   * @param {number} a - The number to subtract from.
   * @param {number} b - The number to subtract.
   * @returns {number} The difference between a and b.
   */
  subtract(a, b) {
    return a - b;
  }
}

// Example usage:
const calc = new Calculator();
console.log(calc.add(5, 3));
