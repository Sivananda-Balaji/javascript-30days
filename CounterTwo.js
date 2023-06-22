//2665. Counter II

var createCounter = function (init) {
  const resetValue = init;
  const increment = () => {
    return ++init;
  };
  const reset = () => {
    init = resetValue;
    return init;
  };
  const decrement = () => {
    return --init;
  };
  return { increment, reset, decrement };
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());

console.log("--counter 2--");
const counter2 = createCounter(0);
console.log(counter2.increment()); // 1
console.log(counter2.increment()); // 2
console.log(counter2.decrement()); // 1
console.log(counter2.reset()); // 0
console.log(counter2.reset()); // 0
