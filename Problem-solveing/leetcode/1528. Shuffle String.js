var restoreString = function (s, indices) {
  let obj = {};
  let result = '';

  for (let i in indices) {
    obj[indices[i]] = s.charAt(i);
  }

  for (let props in obj) {
    result += obj[props];
  }

  return result;
};

console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]));
console.log(restoreString('abc', [0, 1, 2]));
