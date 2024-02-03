// my solution
const sumOfNumbers = (n, result = 0) => {
  if (n === 0) return result;

  return sumOfNumbers(n - 1, result + n);
};

// others solution
const sumOfNumbers2 = (n) => {
  if (n <= 1) return n;

  return n + sumOfNumbers2(n - 1);
};

console.log(sumOfNumbers(10));


// https://www.youtube.com/watch?v=IJDJ0kBx2LM&ab_channel=freeCodeCamp.org  ====> 41min