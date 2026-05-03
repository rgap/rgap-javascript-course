// A basic JavaScript component with inline styles

function createComponentWithStyle(style) {
  const element = document.createElement("div");
  element.innerText = "Styled component!";
  if (style) {
    Object.assign(element.style, style);
  }
  return element;
}

// Usage
const styles = {
  color: "blue",
  fontSize: "20px",
};
document.body.appendChild(createComponentWithStyle(styles));
