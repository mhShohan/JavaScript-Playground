var missingNumber = function (nums) {
  let sumOfNums = 0;
  let n = nums.length;

  for (let i = 0; i < n; ++i) {
    sumOfNums += nums[i];
  }

  // difference(actual-sum-of-n-numbers , sum-of-array) | this gives the missing number.
  return (n * (n + 1)) / 2 - sumOfNums;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber([0]));
console.log(missingNumber([1]));
console.log(missingNumber([1, 2]));
console.log(missingNumber([0, 2, 3]));
