var xorOperation = function (n, start) {
  let sol = start;
  for (let i = 1; i < n; i++) {
    sol ^= start + 2 * i;
  }
  return sol;
};

console.log(xorOperation(5, 0));
console.log(xorOperation(4, 3));
