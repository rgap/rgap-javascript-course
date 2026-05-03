// webpack.config.js

const path = require("path");

module.exports = {
  mode: "development", // or 'production', depending on your use case

  // Entry point for the application
  entry: "./src/main.js",

  // Output configuration for the bundled file
  output: {
    filename: "bundle.js", // Name of the output bundle file
    path: path.resolve(__dirname, "dist"), // Output directory, resolved to an absolute path
  },
};

/*
Explanation:
- This file is the Webpack configuration file.
- `mode`: Specifies the mode for Webpack. It can be 'development', 'production', or 'none'. 
  - 'development': Provides a more readable output and includes additional debugging information.
  - 'production': Optimizes the output for performance, including minification and other optimizations.
- `entry`: The entry point for the application. Webpack starts building the dependency graph from this file.
- `output`: Configuration for the output bundle.
  - `filename`: The name of the output bundle file (bundle.js).
  - `path`: The output directory for the bundle, resolved to an absolute path using the `path` module.
- The `path` module is a built-in Node.js module used to handle file and directory paths.
*/
