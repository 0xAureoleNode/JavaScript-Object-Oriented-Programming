function StopWatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) {
      throw new Error('现在已经是运行状态');
    }
    running = true;

    startTime = new Date();
  };

  this.stop = function () {
    if (!running) {
      throw new Error('现在已经是停滞状态');
    }
    running = false;
    endTime = new Date();

    const secondes = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += secondes;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration;
    },
  });
}
