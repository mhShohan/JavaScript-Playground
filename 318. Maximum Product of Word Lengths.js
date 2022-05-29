var maxProduct = function (words) {
  let result = 0;
  const mask = Array(words.length).fill(0);

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    for (let j = 0; j < word.length; j++) {
      mask[i] |= 1 << (word.charCodeAt(j) - 97);
    }
    for (let x = 0; x < i; x++) {
      if ((mask[i] & mask[x]) == 0)
        result = Math.max(result, words[i].length * words[x].length);
    }
  }

  return result;
};

console.log(maxProduct(['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef']));
console.log(maxProduct(['a', 'ab', 'abc', 'd', 'cd', 'bcd', 'abcd']));
console.log(maxProduct(['a', 'aa', 'aaa', 'aaaa']));
