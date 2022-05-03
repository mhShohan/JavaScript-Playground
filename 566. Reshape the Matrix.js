var matrixReshape = function (mat, r, c) {
  let originalRows = mat.length;
  let originalCols = mat[0].length;
  let numberOfElementsInMat = originalRows * originalCols;
  let numberOfElementsInReshape = r * c;
  if (numberOfElementsInMat !== numberOfElementsInReshape) return mat;

  let flattenedArray = mat.flat();
  let reshapedArray = [];
  let index = 0;

  for (let i = 0; i < r; i++) {
    let row = [];
    for (let j = 0; j < c; j++) {
      row.push(flattenedArray[index++]);
    }
    reshapedArray.push(row);
  }

  return reshapedArray;
};

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4
  )
);
