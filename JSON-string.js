//2633. Convert Object to JSON String

var jsonStringify = function (object) {
  if (typeof object === "string") {
    return `"${object}"`;
  } else if (
    typeof object === "number" ||
    typeof object === "boolean" ||
    obj === null
  ) {
    return String(object);
  } else if (Array.isArray(object)) {
    const elements = object.map((ele) => jsonStringify(ele));
    return "[" + elements.join(",") + "]";
  } else if (typeof object === "object") {
    const keys = Object.keys(object);
    const pairs = keys.map((key) => `"${key}":${jsonStringify(object[key])}`);
    return "{" + pairs.join(",") + "}";
  } else {
    return "";
  }
};

const object = { y: 1, x: 2 };

const result = jsonStringify(object);

console.log(result);
