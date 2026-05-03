# 2. The Solution: Event Delegation

Because events naturally **bubble up** (Phase 3: Bubbling Phase), we can use a highly efficient architectural pattern called **Event Delegation**.

Instead of assigning 1,000 event listeners to 1,000 `<li>` children, you assign **only one** event listener to their common parent (the `<ul>`).

When the user clicks an `<li>`, the event will inevitably bubble up to the `<ul>`. The parent catches the event, and we can figure out exactly which child triggered it by checking `event.target`.

```javascript
// A single listener on the parent
document.querySelector('ul').addEventListener('click', function(event) {
    // Check if the click originated from an LI node
    if (event.target.tagName === 'LI') {
        console.log("You clicked on:", event.target.textContent);
    }
});
```

### Advantages of Event Delegation:
1. **Minimal Memory Usage**: You create only 1 listener instead of 1,000.
2. **Cleaner Code**: No need for `forEach` loops.
3. **Future-proof**: It automatically works for elements that are added to the DOM dynamically later.
