// A reusable component that can contain child elements

function createComponentWithChildren(text, children) {
  const element = document.createElement("div");
  element.innerText = text;

  children.forEach(child => {
    element.appendChild(child);
  });

  return element;
}

// Usage
const child1 = document.createElement("span");
child1.innerText = "Child 1";
const child2 = document.createElement("span");
child2.innerText = "Child 2";

document.body.appendChild(createComponentWithChildren("Parent Component", [child1, child2]));
