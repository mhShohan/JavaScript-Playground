var nearestValidPoint = function (x, y, points) {
  let minValue = Number.MAX_SAFE_INTEGER;
  let index = -1;

  for (let i = 0; i < points.length; i++) {
    const [xVal, yVal] = points[i];
    if (x === xVal || y === yVal) {
      let diff = Math.abs(xVal - x) + Math.abs(yVal - y);
      if (diff < minValue) {
        minValue = diff;
        index = i;
      }
    }
  }

  return index;
};

console.log(
  nearestValidPoint(3, 4, [
    [1, 2],
    [3, 1],
    [2, 4],
    [2, 3],
    [4, 4],
  ])
);
