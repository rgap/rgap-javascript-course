# 3. Handling Dynamic Elements

One of the greatest superpowers of Event Delegation is how it naturally handles **dynamic elements**.

In modern web applications, the interface changes constantly. We fetch data from APIs, create elements with `document.createElement`, and insert them into the DOM without reloading the page.

If you attach event listeners directly to elements upon page load, any element added to the DOM **after** that moment will not have the event listener. You would have to manually bind the listener again upon creation.

However, with Event Delegation, since the listener is on the **parent container** (which was already there on load), any new child you insert into that parent will instantly and automatically trigger the parent's listener when clicked.
