var myPow = function (x, n) {
  let result = 1;
  if (x === 1) return 1;

  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      result *= x;
    }
  } else {
    for (let i = 1; i <= Math.abs(n); i++) {
      result /= x;
    }
  }
  return result;
};

console.log(myPow(2, 10));
console.log(myPow(2, -2));
console.log(myPow(2.0, -2147483648));
