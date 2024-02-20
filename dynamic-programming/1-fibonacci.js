// with classical fibonacci code we cannot get value upper then 40
// Time complexity => O(2^n)
// Space complexity => O(n)
const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};


// with memoization
// Time complexity => O(n)
// Space complexity => O(n)
let count = 0;
const fibonacci = (n, memo = {}) => {
  count++;
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  if (n <= 2) return 1;

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
};

const arr = [];

for (let i = 0; i <= 20; i++) {
  arr.push(fibonacci(i));
}

// console.log(fibonacci(50));
console.log(arr);