# 6. Basic DOM Hierarchy

An HTML element doesn't appear out of nowhere. It is part of an inheritance chain.

For example, an HTML button has a hierarchy like this:

```js
// EventTarget
//   ↓
// Node
//   ↓
// Element
//   ↓
// HTMLElement
//   ↓
// HTMLButtonElement
```

Because `HTMLButtonElement` is at the bottom, it inherits all the capabilities of the layers above it. Because `EventTarget` is at the very top, the button can listen to events.
