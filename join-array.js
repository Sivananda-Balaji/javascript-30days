//2722. Join Two Arrays by ID

var join = function (arr1, arr2) {
  arr1.sort((a, b) => a.id - b.id);
  arr2.sort((a, b) => a.id - b.id);
  const answer = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i].id < arr2[j].id) {
      answer.push(arr1[i]);
      i++;
    } else if (arr2[j].id < arr1[i].id) {
      answer.push(arr2[j]);
      j++;
    } else {
      answer.push({ ...arr1[i], ...arr2[j] });
      j++;
      i++;
    }
  }
  while (i < arr1.length) {
    answer.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    answer.push(arr2[j]);
    j++;
    i++;
  }
  return answer;
};

const arr1 = [
  { id: 1, x: 0, g: 2 },
  { id: 2, e: 23, a: 55 },
  { id: 3, y: 6, r: 11, v: 14 },
];
const arr2 = [
  { id: 2, p: 80, f: 76, k: 85 },
  { id: 4, c: 29, k: 98 },
];

const result = join(arr1, arr2);

console.log(result);
