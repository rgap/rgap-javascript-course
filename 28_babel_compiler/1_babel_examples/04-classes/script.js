// ES6 Classes
// Classes provide a more concise and clear syntax for creating objects and dealing with inheritance.

// Before Babel transformation (ES6)
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

const person = new Person("John");
console.log(person.greet());

// After Babel transformation (ES5)
// "use strict";

// function _classCallCheck(instance, Constructor) {
//   if (!(instance instanceof Constructor)) {
//     throw new TypeError("Cannot call a class as a function");
//   }
// }

// function _defineProperties(target, props) {
//   for (var i = 0; i < props.length; i++) {
//     var descriptor = props[i];
//     descriptor.enumerable = descriptor.enumerable || false;
//     descriptor.configurable = true;
//     if ("value" in descriptor) descriptor.writable = true;
//     Object.defineProperty(target, descriptor.key, descriptor);
//   }
// }

// function _createClass(Constructor, protoProps, staticProps) {
//   if (protoProps) _defineProperties(Constructor.prototype, protoProps);
//   if (staticProps) _defineProperties(Constructor, staticProps);
//   return Constructor;
// }

// var Person = /*#__PURE__*/ (function () {
//   function Person(name) {
//     _classCallCheck(this, Person);

//     this.name = name;
//   }

//   _createClass(Person, [
//     {
//       key: "greet",
//       value: function greet() {
//         return "Hello, my name is " + this.name;
//       },
//     },
//   ]);

//   return Person;
// })();

// var person = new Person("John");
// console.log(person.greet());
