var shuffle = function (nums, n) {
  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(nums[i]);
    result.push(nums[i + n]);
  }

  return result;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));
console.log(shuffle([1, 1, 2, 2], 2));
