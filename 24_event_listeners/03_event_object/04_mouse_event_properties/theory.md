# 4. `MouseEvent` Properties

When an event related to the pointer occurs, the browser generates an object of type `MouseEvent` (or its modern version `PointerEvent`).

This subclass adds dozens of mathematical properties related to the exact coordinates where the impact occurred on the screen.

The most used coordinates are:

### A. Viewport Coordinates (`clientX`, `clientY`)
- `event.clientX`: X (horizontal) coordinate relative to the visible portion of the browser window.
- `event.clientY`: Y (vertical) coordinate relative to the visible portion of the browser window.
*(If you scroll down, `clientY` continues to measure from the top of your visible screen, not from the beginning of the long document).*

### B. Absolute Document Coordinates (`pageX`, `pageY`)
- `event.pageX`: X coordinate relative to the entire HTML document.
- `event.pageY`: Y coordinate relative to the entire HTML document.
*(If your page is 5000px high and you click all the way down, `pageY` will be a number close to 5000).*

### C. Other useful properties
- `event.button`: Tells you which mouse button was pressed (0 for main left click, 1 for middle wheel, 2 for secondary right click).
