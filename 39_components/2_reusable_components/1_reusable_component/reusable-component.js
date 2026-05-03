// A reusable JavaScript component that accepts parameters

function createReusableComponent(text, className) {
  const element = document.createElement("div");
  element.innerText = text;
  if (className) {
    element.className = className;
  }
  return element;
}

// Usage
document.body.appendChild(createReusableComponent("Hello, reusable component!", "my-class"));
document.body.appendChild(createReusableComponent("Another instance", "another-class"));
