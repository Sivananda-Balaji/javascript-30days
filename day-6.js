//2626. Array Reduce Transformation

var reduce = function (nums, fn, init) {
  let result = init;
  nums.forEach((ele) => {
    result = fn(result, ele);
  });
  return result;
};

const nums = [1, 2, 3, 4];
const fn = function sum(accum, curr) {
  return accum + curr;
};
const init = 0;

const result = reduce(nums, fn, init);
console.log(result);
