# 9. `dispatchEvent()`

This method allows you to trigger an event manually from JavaScript, simulating an action.

```js
const event = new Event("click");
button.dispatchEvent(event);
```

This means the event was not caused directly by the user, but programmatically by the code. It is very useful for testing, triggering custom logic, or creating custom events (`CustomEvent`).
