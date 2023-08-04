//2637. Promise Time Limit

var timeLimit = function (fn, t) {
  return async function (...args) {
    const fnPromise = fn(...args);
    const timePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
    });
    return Promise.race([fnPromise, timePromise]);
  };
};

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms
