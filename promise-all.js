//2721. Execute Asynchronous Functions in Parallel

var promiseAll = async function (functions) {
  const promise = new Promise((resolve, reject) => {
    const answer = new Array(functions.length);
    let count = 0;
    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((res) => {
          answer[i] = res;
          count++;
          if (count === functions.length) {
            resolve(answer);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
  return promise;
};

const promise = promiseAll([
  () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
]);
promise.then(console.log);
