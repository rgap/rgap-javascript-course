# 3. Fundamental Properties

Regardless of the event subclass (whether it's mouse, keyboard, or load), they all inherit fundamental properties from the parent `Event` object.

These are the most important base properties that you will use constantly:

### A. `event.type`
Returns a string indicating the exact name of the event that was just fired.
For example: `"click"`, `"keydown"`, `"submit"`.

### B. `event.target` (Crucial!)
It is a direct reference to the specific DOM element that originated the action.
If the user clicked on an image `<img src="...">`, `event.target` will be exactly that image node. This is vital to master the *Event Delegation* technique.

### C. `event.currentTarget`
Unlike `target`, this property points to the DOM element that **has the listener attached to it**.
If you attach the listener to a `<ul>`, but the user clicks on an `<li>` inside it, the `event.target` will be the `<li>`, but the `event.currentTarget` will point precisely to the `<ul>`.
