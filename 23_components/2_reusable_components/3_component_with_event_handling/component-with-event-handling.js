// A reusable component with event handling

function createComponentWithEventHandling(text) {
  const element = document.createElement("div");
  const button = document.createElement("button");
  element.innerText = text;
  button.innerText = "Click me";

  button.addEventListener("click", () => {
    alert("Button clicked!");
  });

  element.appendChild(button);
  return element;
}

// Usage
document.body.appendChild(createComponentWithEventHandling("Component with Event"));
