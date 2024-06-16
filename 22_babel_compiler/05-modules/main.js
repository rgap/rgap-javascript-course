// Before Babel transformation (ES6)
import { greet } from "./module";

console.log(greet("world"));

// After Babel transformation (ES5)
// "use strict";

// var _module = require("./module");

// console.log((0, _module.greet)("world"));
