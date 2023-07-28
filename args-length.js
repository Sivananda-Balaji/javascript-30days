//2703. Return Length of Arguments Passed

var argumentsLength = function (...args) {
  return args.length;
};
const len = argumentsLength(1, 2, 3);
console.log(len);
