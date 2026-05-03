# 1. The Problem with Multiple Listeners

Often, you have a list of similar elements (like items in a to-do list, rows in a table, or buttons in a menu) and you want them all to do something when clicked.

The beginner's approach is to use `querySelectorAll` and a `forEach` loop to attach an `addEventListener` to every single element.

```javascript
// Adding listeners to every single LI element
const listItems = document.querySelectorAll('li');
listItems.forEach(item => {
    item.addEventListener('click', () => {
        console.log("Clicked:", item.textContent);
    });
});
```

### The Drawbacks (Why is this bad?)
1. **High Memory Consumption**: If you have 1,000 rows in a table, you just created 1,000 separate event listeners in the browser's memory. This makes your app slower.
2. **Maintenance Nightmare**: What if you add a new `<li>` dynamically using JavaScript *after* the initial page load? The new element **will not** have the listener! You would have to manually add the event listener to every new element upon creation.
