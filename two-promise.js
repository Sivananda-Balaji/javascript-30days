//2723. Add Two Promises

var addTwoPromises = async function (promise1, promise2) {
  try {
    return (await promise1) + (await promise2);
  } catch (err) {
    console.log(err);
  }
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
