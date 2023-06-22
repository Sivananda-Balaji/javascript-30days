//2704. To Be Or Not To Be

var expect = function (val) {
  const toBe = (value) => {
    if (val === value) {
      return true;
    } else {
      throw new Error("Not Equal");
    }
  };

  const notToBe = (value) => {
    if (value !== val) {
      return true;
    } else {
      throw new Error("Equal");
    }
  };
  return { toBe, notToBe };
};

console.log(expect(5).toBe(5));
//expect(5).notToBe(5);
