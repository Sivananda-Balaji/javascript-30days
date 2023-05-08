//2635. Apply Transform Over Each Element in Array

var map = function (arr, fn) {
  const newArr = [];
  arr.forEach((ele, index) => {
    newArr.push(fn(ele, index));
  });
  return newArr;
};

const arr = [1, 2, 3];
const fn = function plusone(n) {
  return n + 1;
};
const result = map(arr, fn);
console.log(result);
