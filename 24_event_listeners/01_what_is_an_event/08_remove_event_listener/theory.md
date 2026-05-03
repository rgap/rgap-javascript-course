# 8. `removeEventListener()`

This method allows you to remove a listener that was previously registered.

For it to work correctly, the function you are trying to remove **must be the exact same function reference in memory** that was added. You cannot remove anonymous functions.

```js
// This works:
function handleClick() { console.log("Clicked"); }
btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick);

// This DOES NOT work:
btn.addEventListener("click", () => console.log("Clicked"));
btn.removeEventListener("click", () => console.log("Clicked")); // Different memory reference!
```
