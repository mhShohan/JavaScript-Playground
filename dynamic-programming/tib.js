const tib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 3) return n;

  memo[n] = tib(n - 1, memo) + tib(n - 2, memo) + tib(n - 3, memo);
  return memo[n];
};

const arr = [];

for (let i = 0; i <= 10; i++) {
  // arr.push(tib(i));
}

console.log(tib(40));
// console.log(arr);