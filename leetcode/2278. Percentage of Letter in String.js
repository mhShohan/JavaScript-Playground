var percentageLetter = function (s, letter) {
  let result;
  let count = 0;
  for (let i of s) {
    if (i === letter) {
      count++;
    }
  }

  result = (count / s.length) * 100;
  return Math.floor(result);
};

console.log(percentageLetter('foobar', 'o'));
console.log(percentageLetter('jjjj', 'k'));
