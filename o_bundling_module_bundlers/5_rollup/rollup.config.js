// rollup.config.js

export default {
  input: "src/main.js", // Entry point for the application
  output: {
    file: "dist/bundle.js", // Output file for the bundled code
    format: "iife", // Output format (Immediately Invoked Function Expression)
    name: "bundle", // Global variable name for the IIFE
  },
};

/*
Explanation:
- This file is the Rollup configuration file.
- `input`: The entry point for the application. Rollup starts building the dependency graph from this file.
- `output`: Configuration for the output bundle.
  - `file`: The name of the output bundle file (bundle.js).
  - `format`: The format of the output bundle. 'iife' stands for Immediately Invoked Function Expression, which is suitable for including in a <script> tag.
  - `name`: The name of the global variable for the IIFE. This is useful if the bundle is included as a script in an HTML file.
*/
