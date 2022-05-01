var isHappy = function (n) {
  let arr = [];

  while (true) {
    n = String(n)
      .split('')
      .reduce((acc, cur) => acc + cur * cur, 0);

    if (arr.find((a) => a === n) === undefined) {
      arr.push(n);
    } else {
      return false;
    }
    if (n === 1) return true;
  }
};

console.log(isHappy(19));
console.log(isHappy(9));
