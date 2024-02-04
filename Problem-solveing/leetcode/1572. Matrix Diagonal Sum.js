var diagonalSum = function (mat) {
  let result = [];

  for (let i = 0; i < mat.length; i++) {
    result.push(mat[i][i]);
    result.push(mat[i][mat.length - 1 - i]);
  }

  if (mat.length % 2 !== 0) {
    result.splice(Math.floor(mat.length / 2 + mat.length / 2), 1);
  }
  console.log(result);
  return result.reduce((acc, cur) => acc + cur);
};

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  diagonalSum([
    [7, 9, 8, 6, 3],
    [3, 9, 4, 5, 2],
    [8, 1, 10, 4, 10],
    [9, 5, 10, 9, 6],
    [7, 2, 4, 10, 8],
  ])
);
