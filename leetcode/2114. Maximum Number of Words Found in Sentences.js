var mostWordsFound = function (sentences) {
  let result = [];

  for (let i of sentences) {
    result.push(i.split(' ').length);
  }
  return Math.max(...result);
};

console.log(
  mostWordsFound([
    'alice and bob love leetcode',
    'i think so too',
    'this is great thanks very much',
  ])
);
console.log(
  mostWordsFound(['please wait', 'continue to fight', 'continue to win'])
);
