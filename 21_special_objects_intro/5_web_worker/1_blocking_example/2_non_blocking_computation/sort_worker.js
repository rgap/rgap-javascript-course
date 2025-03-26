/*
  🏗️ Web Worker Script (sort_worker.js)
  -------------------------------------
  - Sorts an array in a separate thread and sends back a message.
*/

self.onmessage = function (event) {
  const array = event.data;

  array.sort(); // Perform the sorting

  self.postMessage("Sorting completed!"); // Notify the main thread
};
