//2666. Allow One Function Call

var once = function (fn) {
  let count = 0;
  return function (...args) {
    if (count < 1) {
      count++;
      return fn(...args);
    }
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn
