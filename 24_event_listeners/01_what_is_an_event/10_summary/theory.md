# 10. Summary

An **event** is a signal that something occurred on the page, in the browser, or in an API.

Events allow JavaScript to respond to actions like clicks, typing, content loading, form submissions, or window resizing.

To listen to these events, the object must be part of the DOM hierarchy and implement the `EventTarget` interface.

The 3 most important methods provided by `EventTarget` are:
1. `addEventListener()`: To register an event.
2. `removeEventListener()`: To stop listening to an event.
3. `dispatchEvent()`: To trigger an event programmatically.
