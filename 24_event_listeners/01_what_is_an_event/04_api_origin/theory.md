# 4. Events caused by APIs or System Processes

Some events occur as a result of browser APIs or asynchronous processes finishing their work.

For example:
* A timer finishes (`setTimeout` / `setInterval` - though they use callbacks, they represent asynchronous triggers).
* A network request completes (`fetch` or `XMLHttpRequest` events like `load`, `error`).
* A WebSocket connection receives a message (`message`).
* An animation finishes playing (`animationend`).
* A media file starts playing or pauses (`play`, `pause`).
