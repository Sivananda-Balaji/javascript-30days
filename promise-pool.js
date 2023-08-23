//2636. Promise Pool

var promisePool = async function (functions, n) {
  const evaluateNext = async () => {
    const fn = functions.shift();
    if (fn) {
      await fn();
      return evaluateNext();
    }
  };
  const nPromises = Array(n).fill().map(evaluateNext);
  return Promise.all(nPromises);
};

const sleep = (t) => new Promise((res) => setTimeout(res, t));
promisePool([() => sleep(500), () => sleep(400)], 1).then(console.log); // After 900ms
