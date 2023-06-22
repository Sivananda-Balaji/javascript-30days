//2667. Create Hello World Function

var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

const f = createHelloWorld();
const result = f();
console.log(result);
