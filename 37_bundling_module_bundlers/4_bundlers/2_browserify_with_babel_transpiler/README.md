# Browserify with Babel Example

Browserify is a tool that allows you to use Node.js-style `require` statements in the browser. It was introduced around 2011 to help manage dependencies in front-end JavaScript projects. Babel is a JavaScript compiler created in 2014 (originally called 6to5) that allows you to use the latest JavaScript features without worrying about browser compatibility.

### Steps to Run

1. Install dependencies: `npm install`
2. Build the bundle: `npm run build`
3. Open `index.html` in a browser.

### Explanation

- **Browserify**: Allows the use of CommonJS modules in the browser by bundling all dependencies into a single file.
- **Babel**: A JavaScript compiler created in 2014 that transpiles modern JavaScript syntax to a syntax compatible with older browsers.
- **greet.js**: Module that exports a function using ES6 syntax.
- **main.js**: Imports the `greet` module and uses it.
- **index.html**: Loads the bundled JavaScript file.
- **.babelrc**: Babel configuration file specifying the preset to use.

### package.json

It defines the project metadata and dependencies for the Browserify example.

- `name`: The name of the project.
- `version`: The version of the project.
- `description`: A brief description of the project.
- `main`: The entry point for the project, specifying the output bundle file.
- `scripts`: Defines custom script commands that can be run using `npm run <script-name>`.
  - `build`: Uses the Browserify tool to bundle the `src/main.js` file and output the result to `dist/bundle.js`.
- `dependencies`: Specifies the dependencies required for the project.
  - `browserify`: The version of Browserify to be used for bundling.
- `author`: The author of the project (left blank in this example).
- `license`: The license under which the project is distributed (ISC in this example).

### package-lock.json

File created by npm (Node Package Manager) that records the exact versions of installed dependencies, including nested dependencies, ensuring that the same dependency versions are used across all environments. This file is generated automatically in the root of your project directory whenever the npm install command modifies the node_modules directory or the package.json file.
