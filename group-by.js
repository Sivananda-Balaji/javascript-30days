//2631. Group By

Array.prototype.groupBy = function (fn) {
  const map = {};
  for (let i = 0; i < this.length; i++) {
    if (map[fn(this[i])]) {
      map[fn(this[i])].push(this[i]);
    } else {
      map[fn(this[i])] = [this[i]];
    }
  }
  return map;
};

(array = [{ id: "1" }, { id: "1" }, { id: "2" }]),
  (fn = function (item) {
    return item.id;
  });
console.log(array.groupBy(fn)); // {"1":[1],"2":[2],"3":[3]}
