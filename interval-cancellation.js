//2725. Interval Cancellation

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  fn(...args);
  const intervalId = setInterval(() => {
    fn(...args);
  }, t);
  return () => {
    clearInterval(intervalId);
  };
};

const result = [];
const fn = (x) => x * 2;
const args = [4],
  t = 20,
  cancelT = 110;
const start = performance.now();
const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};
const cancel = cancellable(log, args, t);
setTimeout(() => {
  cancel();
}, cancelT);
setTimeout(() => {
  console.log(result);
}, cancelT + t + 15);
