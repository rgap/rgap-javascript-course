// JSX (JavaScript XML)
// JSX allows you to write HTML elements in JavaScript and place them in the DOM without using createElement() or appendChild() methods.

// Before Babel transformation (JSX)
const App = () => {
  return <h1>Hello, world!</h1>;
};

export default App;

// After Babel transformation (JS)
// "use strict";

// var App = function App() {
//   return React.createElement("h1", null, "Hello, world!");
// };

// exports.default = App;
