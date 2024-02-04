var reversePrefix = function (word, ch) {
  const arr = word.split('');
  const index = arr.findIndex((i) => i === ch);
  let prefix = [];
  let endStr = '';

  for (let i = 0; i <= index; i++) {
    prefix.push(arr[i]);
  }
  for (let i = index + 1; i < arr.length; i++) {
    endStr += arr[i];
  }

  return prefix.reverse().join('') + endStr;
};

console.log(reversePrefix('abcdefd', 'd'));
console.log(reversePrefix('xyxzxe', 'z'));
console.log(reversePrefix('abcd', 'z'));
