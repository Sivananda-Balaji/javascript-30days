//2705. Compact Object

var compactObject = function (obj) {
  const compact = (obj) => {
    if (!obj) {
      return false;
    }
    if (typeof obj !== "object") {
      return obj;
    }
    let answer = [];
    if (!Array.isArray(obj)) {
      answer = {};
    }
    for (let val in obj) {
      const result = compact(obj[val]);
      if (result) {
        if (!Array.isArray(answer)) {
          answer[val] = result;
        } else {
          answer.push(result);
        }
      }
    }
    return answer;
  };
  const result = compact(obj);
  return result;
};

const obj = { a: null, b: [false, 1] };

const result = compactObject(obj);

console.log(result);
