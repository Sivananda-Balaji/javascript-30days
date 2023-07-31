//2623. Memoize

function memoize(fn) {
  const map = {};
  return function (...args) {
    const key = [...args].join("");
    if (key in map) {
      return map[key];
    }
    const result = fn(...args);
    map[key] = result;
    return result;
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5
console.log(callCount); // 1
