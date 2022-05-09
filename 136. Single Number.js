var singleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  let single;

  for (let i = 0; i < nums.length; i++) {
    if (single === undefined) {
      single = nums[i];
    } else {
      if (single === nums[i]) {
        single = undefined;
      }
    }
  }

  return single;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([2, 2, 1]));
