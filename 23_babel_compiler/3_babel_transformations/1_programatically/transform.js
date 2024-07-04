const fs = require("fs");
const path = require("path");
const babel = require("@babel/core");

const inputFilePath = path.join(__dirname, "App.jsx");
const outputFilePath = path.join(__dirname, "compiled.js");

const inputCode = fs.readFileSync(inputFilePath, "utf-8");

const outputCode = babel.transformSync(inputCode, {
  presets: ["@babel/preset-env", "@babel/preset-react"],
}).code;

fs.writeFileSync(outputFilePath, outputCode);

console.log("Compiled successfully");
