# 5. The `EventTarget` Interface

For a JavaScript object to be able to **receive events** or **listen for events**, it must implement an interface called `EventTarget`.

An **interface** is like a contract: it specifies what methods an object must have to fulfill a specific role.

In the DOM, many important objects implement `EventTarget`:
* `window` (The global browser object)
* `document` (The HTML document object)
* All HTML Elements (`button`, `div`, `input`, etc.)

Because they are `EventTarget`s, they all have access to methods like `addEventListener()`, `removeEventListener()`, and `dispatchEvent()`.
