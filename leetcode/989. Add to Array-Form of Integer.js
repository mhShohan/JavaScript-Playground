var addToArrayForm = function (num, k) {
  let numb = BigInt(num.join(''));
  let result = numb + BigInt(k);

  return result
    .toString()
    .split('')
    .map((n) => Number(n));
};

console.log(addToArrayForm([1, 2, 0, 0], 34));
console.log(
  addToArrayForm(
    [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 0, 0],
    516
  )
);
