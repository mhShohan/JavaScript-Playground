var finalValueAfterOperations = function (operations) {
  let result = 0;

  for (let str of operations) {
    if (str.startsWith('--')) --result;
    if (str.startsWith('++')) ++result;
    if (str.endsWith('--')) result--;
    if (str.endsWith('++')) result++;
  }
  return result;
};

console.log(finalValueAfterOperations(['--X', 'X++', 'X++']));
console.log(finalValueAfterOperations(['++X', '++X', 'X++']));
console.log(finalValueAfterOperations(['X++', '++X', '--X', 'X--']));
