var areNumbersAscending = function (s) {
  let strArr = s.split(' ');
  let strNumArr = [];

  for (let str of strArr) {
    if (str.match(/\d+/)) {
      strNumArr.push(Number(str));
    }
  }

  let result = strNumArr.every(function (x, i) {
    return i === 0 || x > strNumArr[i - 1];
  });

  return result;
};

console.log(
  areNumbersAscending('1 box has 3 blue 4 red 6 green and 12 yellow marbles')
);
console.log(areNumbersAscending('hello world 5 x 5'));
console.log(
  areNumbersAscending(
    'sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s'
  )
);
