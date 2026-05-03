// A basic JavaScript component that accepts properties (props)

function createComponentWithProps(text) {
  const element = document.createElement("div");
  element.innerText = text;
  return element;
}

// Usage
document.body.appendChild(createComponentWithProps("Hello with props!"));
