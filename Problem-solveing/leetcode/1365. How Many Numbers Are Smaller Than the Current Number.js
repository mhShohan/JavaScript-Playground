var smallerNumbersThanCurrent = function (nums) {
  let result = [];
  for (let i in nums) {
    let count = 0;
    for (let j in nums) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
