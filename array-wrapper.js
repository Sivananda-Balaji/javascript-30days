//2695. Array Wrapper

var ArrayWrapper = function (nums) {
  this.numsArr = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  return this.numsArr.reduce((acc, num) => num + acc, 0);
};

ArrayWrapper.prototype.toString = function () {
  return `[${this.numsArr}]`;
};

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2); // 10
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"
