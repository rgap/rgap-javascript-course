// A dynamic component that updates based on user input

function createDynamicComponent() {
  const element = document.createElement("div");
  const input = document.createElement("input");
  const display = document.createElement("p");

  input.type = "text";
  input.placeholder = "Type something...";

  input.addEventListener("input", () => {
    display.innerText = "You typed: " + input.value;
  });

  element.appendChild(input);
  element.appendChild(display);
  return element;
}

// Usage
document.body.appendChild(createDynamicComponent());
