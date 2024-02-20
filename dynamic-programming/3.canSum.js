const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return true;
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (const num of numbers) {
    const reminder = targetSum - num;

    if (canSum(reminder, numbers) === true) {
      memo[targetSum] = true;
      return true;
    }
  }

  memo[targetSum] = true;
  return false;
};


console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));