# 2. Capture Phase

The **Capture Phase** is the first of the 3 phases of the event flow.

In this phase, the event travels **from top to bottom**. It starts at the `window` object, passes through the `document`, then the `<html>`, the `<body>`, and continues descending through each direct ancestor until it reaches right before the element that originated the event.

### How to listen in the Capture Phase?

By default, almost all event listeners are configured to ignore the capture phase. The browser executes it silently without triggering your code.

To explicitly tell JavaScript: *"Hey! I want this function to run while the event is going down"*, you must use the third argument of `addEventListener()`.

```js
// Passing `true` as the third parameter:
element.addEventListener("click", myFunction, true);

// Or using the modern options object:
element.addEventListener("click", myFunction, { capture: true });
```

### What is it used for?
The capture phase is less common in day-to-day development, but it's useful when you need to intercept an event at the document level *before* it reaches its children. For example, modals that need to close when clicking outside, or analytics systems that must log absolutely everything before any other script cancels it.
