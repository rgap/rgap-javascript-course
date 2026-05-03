// A stateful component in JavaScript using a closure to maintain state

function createStatefulComponent() {
  let state = { counter: 0 };

  function render() {
    const element = document.createElement("div");
    const button = document.createElement("button");

    element.innerText = "Counter: " + state.counter;
    button.innerText = "Increment";

    button.addEventListener("click", () => {
      state.counter++;
      element.innerText = "Counter: " + state.counter;
    });

    element.appendChild(button);
    return element;
  }

  return render();
}

// Usage
document.body.appendChild(createStatefulComponent());
