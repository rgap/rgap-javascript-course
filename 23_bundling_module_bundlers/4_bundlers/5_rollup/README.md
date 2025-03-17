# Rollup Example

Rollup is a module bundler introduced around 2015, focusing on bundling ES6 modules and providing a smaller, more efficient output.

### Steps to Run

1. Install dependencies: `npm install`
2. Build the bundle: `npm run build`
3. Open `index.html` in a browser.

### Explanation

- **Rollup**: A module bundler that processes and bundles ES6 modules into a single file.
- **greet.js**: Module that exports a function using ES6 syntax.
- **main.js**: Imports the `greet` module and uses it.
- **index.html**: Loads the bundled JavaScript file.
- **rollup.config.js**: Configuration file for Rollup, specifying the entry point, output file, output format, and global variable name.
