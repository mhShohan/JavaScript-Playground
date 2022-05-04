var mergeAlternately = function (word1, word2) {
  let result = '';

  let i = 0;

  while (i < word1.length || i < word2.length) {
    result += word1[i] !== undefined ? word1[i] : '';
    result += word2[i] !== undefined ? word2[i] : '';
    i++;
  }

  return result;
};

console.log(mergeAlternately('abc', 'pqr'));
console.log(mergeAlternately('abcaa', 'pqr'));
