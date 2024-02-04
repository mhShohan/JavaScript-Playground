var freqAlphabets = function (s) {
  let engChar = ' abcdefghijklmnopqrstuvwxyz';
  let arr = [];
  let result = '';

  let i = s.length;
  while (i >= 0) {
    let newStr;
    if (s[i] === '#') {
      newStr = s.slice(i - 2, i);
      i -= 3;
    } else {
      newStr = s.charAt(i);
      i--;
    }
    arr.push(Number(newStr));
  }

  arr.forEach((num) => (result += engChar.charAt(num)));

  return result.split('').reverse().join('').trim();
};

console.log(freqAlphabets('10#11#12'));
