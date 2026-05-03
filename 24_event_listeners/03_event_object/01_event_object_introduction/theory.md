# 1. The Event Object

When an event occurs (for example, the user clicks the mouse or presses a key), the browser doesn't just execute the function you passed to `addEventListener`.

In addition to calling your function, the browser automatically creates an **Event Object** in memory.

This object contains absolutely all the context information about what just happened in that exact millisecond. The browser takes this object and injects it as the **first parameter** (argument) to your callback function.

```javascript
const button = document.querySelector('button');

button.addEventListener('click', function(event) {
    // The "event" variable has been injected by the browser
    // It contains all the details of the click
    console.log(event);
});
```

> **Coding Conventions:** 
> It is the industry standard to name this first parameter `event`, `evt`, or simply `e`.
