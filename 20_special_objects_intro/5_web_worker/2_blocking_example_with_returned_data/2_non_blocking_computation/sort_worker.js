/*
  🏗️ Web Worker Script (sort_worker.js)
  -------------------------------------
  - Sorts an array in a separate thread and sends back a message.
*/

self.onmessage = function (event) {
  const array = event.data;

  array.sort(); // Perform the sorting

  // Get the last 3 elements of the sorted array
  const lastThreeElements = array.slice(-3);

  // Send the result back to the main thread
  self.postMessage(lastThreeElements);
};
