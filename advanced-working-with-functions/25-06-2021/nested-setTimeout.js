let timerId = setTimeout(function tick() {
    console.log('tick',timerId._idleStart);
    timerId = setTimeout(tick, 2000); // (*)
  }, 2000);