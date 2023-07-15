//2635. Apply Transform Over Each Element in Array

var map = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }
  return arr;
};

const arr = [1, 2, 3];
const fn = function plusone(n) {
  return n + 1;
};

const result = map(arr, fn);

console.log(result);

/**
 * var map = function (arr, fn) {
  const answer = [];
  arr.forEach((value, index) => {
    answer.push(fn(value, index));
  });
  return answer;
};
 */
