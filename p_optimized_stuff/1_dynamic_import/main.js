// main.js (ES6 Module Usage with Dynamic Import)
async function loadGreetModule() {
  try {
    const { greet } = await import("./greet.js");
    console.log(greet("World"));
  } catch (error) {
    console.error("Error loading module:", error);
  }
}

loadGreetModule();

/*
Explanation:
- This file demonstrates how to use dynamic imports to load the `greet` module.
- The `import()` function is used to dynamically import the `greet` module when needed.
- The `greet` function is then called, and the result is logged to the console.
- Dynamic imports allow for asynchronous loading of modules, which can improve performance by loading modules on demand.
*/
