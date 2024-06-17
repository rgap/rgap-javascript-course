// A basic JavaScript component that creates and returns a DOM element

function createBasicComponent() {
  const element = document.createElement("div");
  element.innerText = "Hello, this is a basic component!";
  return element;
}

// Usage
document.body.appendChild(createBasicComponent());
