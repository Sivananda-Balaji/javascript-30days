//2619. Array Prototype Last

Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  }
  return this[this.length - 1];
};

const arr = [1, 2, 3];
const result = arr.last();
console.log(result);
