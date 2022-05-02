var maximumWealth = function (accounts) {
  let richestArr = [];
  for (let i = 0; i < accounts.length; i++) {
    let total = accounts[i].reduce((acc, cur) => acc + cur);
    richestArr.push(total);
  }
  return Math.max(...richestArr);
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
