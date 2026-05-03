# 5. Prevent Default Behavior

There is a huge general confusion between stopping propagation and preventing the default behavior. They are two **completely different** things.

The browser has "native behaviors" programmed for certain HTML tags.
For example:
- When clicking on an `<a>` link, the browser navigates to another page.
- When submitting a `<form>`, the browser reloads the page and sends the data.
- When checking an `<input type="checkbox">`, the browser draws a checkmark.

We often build applications (Single Page Applications) where we DO NOT want the page to reload when submitting a form. We want to catch the data with JavaScript and send it with an invisible `fetch`.

### `event.preventDefault()`

This method tells the browser: *"Catch the event, but do not perform your standard native behavior. I will handle it with JavaScript"*.

```js
form.addEventListener("submit", function(event) {
  // Prevents the page from abruptly reloading
  event.preventDefault(); 
  
  console.log("Processing data with JS...");
});
```

### The key difference
- `stopPropagation()` prevents **parent elements** from knowing about the event.
- `preventDefault()` prevents **the browser** from executing the native HTML tag action, but it **DOES NOT stop** propagation (the bubble will still go up).
