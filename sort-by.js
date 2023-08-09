//2724. Sort By

var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

const arr = [5, 4, 1, 2, 3],
  fn = (x) => x;

const result = sortBy(arr, fn);
console.log(result);
