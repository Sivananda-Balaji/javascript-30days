//2632. Curry

var curry = function (fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...args1) => {
      return curried(...args, ...args1);
    };
  };
};

function sum(a, b) {
  return a + b;
}
const csum = curry(sum);
console.log(csum(1)(2)); // 3
