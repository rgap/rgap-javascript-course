# 7. `addEventListener()`

The `EventTarget` interface exposes three main methods. The first and most used is `addEventListener()`.

It allows you to register a function that will be executed when an event occurs.

```js
element.addEventListener("eventName", callbackFunction, options);
```

* **eventName**: A string representing the event type (e.g., `"click"`, `"keydown"`).
* **callbackFunction**: The function to run when the event occurs.
* **options** (optional): An object that configures listener behavior (like `{ once: true }`).
