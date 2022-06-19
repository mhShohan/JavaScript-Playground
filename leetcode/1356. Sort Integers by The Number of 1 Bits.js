var sortByBits = function (arr) {
  return arr.sort(
    (a, b) =>
      a.toString(2).split('0').join('').length -
        b.toString(2).split('0').join('').length || a - b
  );
};

console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
