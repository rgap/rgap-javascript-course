// ===============================
// VARIABLES
// ===============================

// Not recommended: Using non-descriptive names.
let a = 'Maria Gomez';
let [firstName, lastName] = a.split(' ');

// Recommended: Use descriptive names with camelCase.
const fullName = 'Maria Gomez';
const [first, last] = fullName.split(' ');

// ===============================
// CONSTANTS
// ===============================

// For true constants (values that never change), use UPPERCASE with underscores.
const MAX_VALUE = 10;
const TOTAL_COUNT = 30;

// ===============================
// FUNCTIONS
// ===============================

// Not recommended: Abbreviated or unclear function names.
function dbl(x) {
  return x * 2;
}

// Recommended: Descriptive names using camelCase.
function multiplyByTwo(x) {
  return x * 2;
}

// ===============================
// CLASSES
// ===============================

// Class names should be in PascalCase.
class Hero {
  constructor(name, health, armor, power, weapon) {
    // Use camelCase for instance properties.
    this.name = name;
    this.health = health;
    this.armor = armor;
    this.power = power;
    this.weapon = weapon;
  }

  // Methods are defined in camelCase.
  printInfo() {
    console.log(`Name: ${this.name}, Health: ${this.health}`);
  }

  strikeEnemy(enemy) {
    console.log(`${this.name} strikes ${enemy}!`);
  }
}

// Example usage:
const hero = new Hero('Archer', 100, 50, 75, 'Bow');
hero.printInfo();
