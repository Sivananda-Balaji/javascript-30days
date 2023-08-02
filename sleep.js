//2621. Sleep

async function sleep(millis) {
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve(millis), millis);
  });
}

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t));
