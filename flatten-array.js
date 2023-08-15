//2625. Flatten Deeply Nested Array

var flat = function (arr, n) {
  const answer = [];
  const flattening = (nums, l) => {
    for (let val of nums) {
      if (Array.isArray(val) && l > 0) {
        flattening(val, l - 1);
      } else {
        answer.push(val);
      }
    }
  };
  flattening(arr, n);
  return answer;
};

const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
n = 1;

const result = flat(arr, n);

console.log(result);
