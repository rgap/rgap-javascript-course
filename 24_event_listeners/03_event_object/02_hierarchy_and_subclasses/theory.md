# 2. Hierarchy and Subclasses

Not all events on the web are the same.

A click needs specific information about the (X, Y) coordinates of the mouse on the screen.
On the other hand, pressing a key needs information about which exact letter was pressed.

Therefore, it wouldn't be efficient or logical to use the same generic "mold" for everything. In the DOM architecture, the generic main `Event` object has multiple specialized "subclasses" that inherit from it.

The most common subclasses you will find are:

- `MouseEvent`: Created for mouse events (`click`, `mousemove`, `mousedown`, `mouseup`).
- `KeyboardEvent`: Created for keyboard events (`keydown`, `keyup`).
- `SubmitEvent`: Created when an HTML form is submitted (`submit`).
- `PointerEvent`: A modern browser API that unifies mouse, touch screen (fingers), and stylus events into a single universal event type.

```javascript
document.addEventListener('keydown', function(event) {
    // If you log this, you'll see it is an [object KeyboardEvent]
    console.log(event.constructor.name); 
});
```
