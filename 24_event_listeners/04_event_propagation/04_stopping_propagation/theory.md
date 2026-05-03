# 4. Stopping Propagation

In some situations, we don't want an event to continue traveling (bubbling) up to the parent elements.

For example, if you have a product card that takes you to the detail page when clicked, but inside the card you have a small "Add to favorites" button.
If the user clicks the small button, the event will bubble up and also trigger the full card's click, taking them to the detail page when they only wanted to "like" it.

To prevent this, the Event Object provides two vital methods:

### A. `event.stopPropagation()`
This is the most common method. It stops the event flow immediately.
If you call it inside the "Add to favorites" button, the bubble bursts right there. The event will not reach the parent card, nor the `<body>`, nor the `window`.

```js
favoriteButton.addEventListener("click", function(event) {
  event.stopPropagation(); // Stop right here!
  console.log("Added to favorites.");
});
```

> **Warning (The Anti-Pattern):**
> Using `stopPropagation` unnecessarily is considered an "anti-pattern". Analytics tools (like Google Analytics) or scripts that close modals when clicking "outside" rely on listening to clicks at the `document` level. If you stop bubbles everywhere, you will break those global systems.

### B. `event.stopImmediatePropagation()`
It stops the upward propagation, just like the previous one, but **in addition**, it prevents any other listeners attached *to that exact same element* from executing.

For example, if the favorite button had 3 listeners attached to it, and the first one calls `stopImmediatePropagation()`, the other two listeners on the button will be canceled and will not execute.
