self.onmessage = function (event) {
  if (event.data === "Start") {
    self.postMessage("Worker started!");
  }
};
