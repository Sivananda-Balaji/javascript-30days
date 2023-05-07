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

/** const obj = {};
  obj.init = init;
  const increment = () => {
    return ++obj.init;
  };
  const reset = () => {
    obj.init = init;
    return init;
  };
  const decrement = () => {
    return --obj.init;
  };
  obj.increment = increment;
  obj.reset = reset;
  obj.decrement = decrement;
  return obj;*/
