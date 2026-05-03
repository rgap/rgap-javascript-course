# Event Handler vs Event Listener

In JavaScript, the terms **Event Handler** and **Event Listener** are often used interchangeably, but technically there is a distinction in how they are implemented and how they behave under the hood.

## 1. Event Handlers (DOM Properties)

An **Event Handler** is typically assigned directly to a property of a DOM element.

```javascript
const button = document.querySelector('button');

// Assigning an Event Handler
button.onclick = function() {
  console.log('Button clicked!');
};
```

### Key Characteristics:
- **One per event type:** Because it's a property of an object, you can only assign **one** function to it.
- **Overwriting:** If you try to assign another function to `button.onclick`, it will **overwrite** the previous one. The first function is lost forever.
- **Syntax:** Usually starts with `on` (e.g., `onclick`, `onmouseover`, `onkeydown`).

---

## 2. Event Listeners (`addEventListener`)

An **Event Listener** is registered using the `addEventListener()` method. This method tells the browser to "listen" for a specific event and execute a callback function when it occurs.

```javascript
const button = document.querySelector('button');

// Registering an Event Listener
button.addEventListener('click', function() {
  console.log('Button clicked via listener!');
});
```

### Key Characteristics (The Modern Standard):
- **Multiple functions:** You can attach as many listeners as you want to the same event on the same element. They will be executed in the order they were added.
- **No overwriting:** Adding a new listener does not overwrite existing ones. They are kept in an internal queue.
- **Advanced control:** Allows specifying whether the event should be caught in the capture phase or the bubbling phase.
- **Unbinding:** You can specifically remove a listener using `removeEventListener()`.

---

## Summary

| Feature | Event Handler (`.onclick`) | Event Listener (`addEventListener`) |
| :--- | :--- | :--- |
| **Assignment** | `element.onclick = fn` | `element.addEventListener('click', fn)` |
| **Multiple attachments** | ❌ No (Overwrites previous) | ✅ Yes (Executes all in order) |
| **Phase control** | ❌ No (Bubbling only) | ✅ Yes (Capture or Bubbling) |
| **Removal** | `element.onclick = null` | `element.removeEventListener('click', fn)` |

**Best Practice:** Always use **Event Listeners** (`addEventListener`) in modern JavaScript to avoid accidentally overwriting behavior and to have better control over event propagation.
