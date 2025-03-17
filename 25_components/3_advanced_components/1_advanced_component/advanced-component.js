// An advanced JavaScript component with state and event handling

function createAdvancedComponent() {
  const element = document.createElement("div");
  const button = document.createElement("button");
  let counter = 0;

  element.innerText = "Counter: " + counter;
  button.innerText = "Increment";

  button.addEventListener("click", () => {
    counter++;
    element.innerText = "Counter: " + counter;
  });

  element.appendChild(button);
  return element;
}

// Usage
document.body.appendChild(createAdvancedComponent());
