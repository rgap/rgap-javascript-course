# 1. The Single-Threaded Nature of JS

JavaScript is a **Single-Threaded** language. This means it has only one "Call Stack" and can only do **one thing at a time**.

Imagine a restaurant with only one chef. The chef can only cook one dish at a time. If the chef decides to cook a dish that takes 3 hours, the entire restaurant stops, and no other orders can be processed during that time.

### Blocking the Main Thread

In JavaScript, if you write synchronous code that takes a long time to run (like a massive `for` loop that counts to 5 billion), the "Call Stack" becomes blocked.

Because the main thread is responsible for both executing JavaScript **and** rendering the UI (updating the screen, responding to clicks, etc.), a blocked Call Stack means the user interface completely freezes.

This is why the number one rule of web performance is: **"Don't block the main thread."**
