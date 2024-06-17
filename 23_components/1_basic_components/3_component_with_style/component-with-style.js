// A basic JavaScript component with inline styles

function createComponentWithStyle() {
  const element = document.createElement("div");
  element.innerText = "Styled component!";
  element.style.color = "blue";
  element.style.fontSize = "20px";
  return element;
}

// Usage
document.body.appendChild(createComponentWithStyle());
