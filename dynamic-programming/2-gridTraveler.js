/**
 * Brute Force
 * Time complexity => O(2^(n+m))
 * Space complexity => O(n+m)
 */
const gridTraveler = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};


/**
 * memoization
 * Time complexity => O(n*m)
 * Space complexity => O(n+m)
 */
const gridTravelerWithMemoization = (m, n, memo = {}) => {
  const key = `${m}-${n}`;
  if (key in memo) return memo[key];

  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = gridTravelerWithMemoization(m - 1, n, memo) + gridTravelerWithMemoization(m, n - 1, memo);
  return memo[key];
};

// console.log(gridTraveler(1, 1));
// console.log(gridTraveler(2, 2));
// console.log(gridTraveler(2, 3));
console.log(gridTravelerWithMemoization(3, 3));
console.log(gridTravelerWithMemoization(4, 4));
console.log(gridTravelerWithMemoization(10, 5));