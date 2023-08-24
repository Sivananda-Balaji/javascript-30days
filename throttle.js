//2676. Throttle
var throttle = function (fn, t) {
  let lastArgs = null;
  let timeoutId = null;
  const execute = () => {
    if (lastArgs) {
      fn(...lastArgs);
      lastArgs = null;
      timeoutId = setTimeout(execute, t);
    } else {
      timeoutId = null;
    }
  };
  return function (...args) {
    if (timeoutId === null) {
      fn(...args);
      timeoutId = setTimeout(execute, t);
    } else {
      lastArgs = args;
    }
  };
};

const throttled = throttle(console.log, 100);
throttled("log"); // logged immediately.
throttled("log"); // logged at t=100ms.
