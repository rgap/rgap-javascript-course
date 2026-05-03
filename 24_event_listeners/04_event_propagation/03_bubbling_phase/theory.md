# 3. Target and Bubbling Phase

Once the capture phase is over, the two most used phases in web development take place.

## The Target Phase
The event finally reaches the specific element where the action occurred (the deepest element in the hierarchy that received the event).
This element is accessible using the `event.target` property.

Here, all listeners that are attached directly to that particular element are executed.

---

## The Bubbling Phase
After hitting the target, the event turns around and starts going up again (bubbling like air underwater).

It travels **from bottom to top**: from the target, passing through its parent, its grandparent, the `<body>`, the `<html>`, until it reaches `window`.

### Default Behavior
**By default**, the `addEventListener` method listens to events **in the Bubbling phase**. That is, if you omit the third parameter, it assumes `false` (don't capture, bubble instead).

```js
// This listener will execute when the bubble goes up
parent.addEventListener("click", myFunction);

// This is exactly the same as:
parent.addEventListener("click", myFunction, false);
```

### Why is it the main phase?
Bubbling is natural. If you have a button with an icon inside it (`<button><i></i></button>`), and the user clicks exactly on the `<i>`, you expect the button to react. This happens automatically thanks to bubbling: the click on the `<i>` bubbles up and triggers the `<button>` listener.
