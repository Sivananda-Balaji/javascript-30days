//2628. JSON Deep Equal

var areDeeplyEqual = function (o1, o2) {
  if (typeof o1 !== typeof o2) {
    return false;
  }
  if (
    typeof o1 !== "object" ||
    typeof o2 !== "object" ||
    o1 === null ||
    o2 === null
  ) {
    return o1 === o2;
  }
  if (Array.isArray(o1) && Array.isArray(o2)) {
    if (o1.length !== o2.length) {
      return false;
    }
    for (let i = 0; i < o1.length; i++) {
      if (!areDeeplyEqual(o1[i], o2[i])) {
        return false;
      }
    }
    return true;
  }
  if (Array.isArray(o1) || Array.isArray(o2)) {
    return false;
  }
  const keysO1 = Object.keys(o1);
  const keysO2 = Object.keys(o2);
  if (keysO1.length !== keysO2.length) {
    return false;
  }
  for (let val of keysO1) {
    if (!keysO2.includes(val) || !areDeeplyEqual(o1[val], o2[val])) {
      return false;
    }
  }
  return true;
};

const o1 = { x: 1, y: 2 },
  o2 = { x: 1, y: 2 };
const result = areDeeplyEqual(o1, o2);
console.log(result);
