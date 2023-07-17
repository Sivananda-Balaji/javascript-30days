//2634. Filter Elements from Array

var filter = function (arr, fn) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      arr[index] = arr[i];
      index++;
    }
  }
  while (arr.length > index) {
    arr.pop();
  }
  return arr;
};

const arr = [0, 10, 20, 30];
const fn = function greaterThan10(n) {
  return n > 10;
};

const result = filter(arr, fn);
console.log(result);

/**
 * var filter = function (arr, fn) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      answer.push(arr[i]);
    }
  }
  return answer;
};
 */
