//2665. Counter II

var createCounter = function (init) {
  const val = init;
  return {
    increment: () => {
      return ++init;
    },
    reset: () => {
      init = val;
      return val;
    },
    decrement: () => {
      return --init;
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
