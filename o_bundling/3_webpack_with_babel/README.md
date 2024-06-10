# Webpack Example With Babel

Webpack is a powerful module bundler introduced around 2012. Babel is a JavaScript compiler created in 2014 (originally called 6to5) that allows you to use the latest JavaScript features without worrying about browser compatibility.

### Steps to Run

1. Install dependencies: `npm install`
2. Build the bundle: `npm run build`
3. Open `index.html` in a browser.

### Explanation

- **Webpack**: A module bundler that processes and bundles JavaScript files along with other assets.
- **Babel**: A JavaScript compiler created in 2014 that transpiles modern JavaScript syntax to a syntax compatible with older browsers.
- **greet.js**: Module that exports a function using ES6 syntax.
- **main.js**: Imports the `greet` module and uses it.
- **index.html**: Loads the bundled JavaScript file.
- **webpack.config.js**: Configuration file for Webpack, configured to use Babel.
- **.babelrc**: Babel configuration file specifying the preset to use.

### package.json

It defines the project metadata and dependencies for the Webpack example with Babel.

- `name`: The name of the project.
- `version`: The version of the project.
- `description`: A brief description of the project.
- `main`: The entry point for the project, specifying the output bundle file.
- `scripts`: Defines custom script commands that can be run using `npm run <script-name>`.
  - `build`: Uses the Webpack tool to bundle the project files. The configuration for Webpack is specified in `webpack.config.js`.
- `dependencies`: Specifies the dependencies required for the project.
  - `@babel/core`: The core Babel library required for transpiling modern JavaScript syntax.
  - `@babel/preset-env`: A preset that allows Babel to transpile modern JavaScript based on the target environment.
  - `babel-loader`: A loader for Webpack that integrates Babel to transpile files.
  - `webpack`: The version of Webpack to be used for bundling.
  - `webpack-cli`: The version of the Webpack Command Line Interface to be used for running Webpack commands.
- `author`: The author of the project (left blank in this example).
- `license`: The license under which the project is distributed (ISC in this example).

### package-lock.json

File created by npm (Node Package Manager) that records the exact versions of installed dependencies, including nested dependencies, ensuring that the same dependency versions are used across all environments. This file is generated automatically in the root of your project directory whenever the npm install command modifies the node_modules directory or the package.json file.
