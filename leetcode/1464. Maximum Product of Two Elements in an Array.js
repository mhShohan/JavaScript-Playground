var maxProduct = function (nums) {
  nums.sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] - 1) * (nums[i + 1] - 1) > result) {
      result = (nums[i] - 1) * (nums[i + 1] - 1);
    }
  }
  return result;
};

console.log(maxProduct([3, 4, 5, 2]));
console.log(maxProduct([1, 5, 4, 5]));
console.log(maxProduct([3, 7]));
