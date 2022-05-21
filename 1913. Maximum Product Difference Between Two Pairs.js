var maxProductDifference = function (nums) {
  let srotedNum = nums.sort((a, b) => a - b);
  let minPair = srotedNum[0] * srotedNum[1];
  let maxPair =
    srotedNum[srotedNum.length - 1] * srotedNum[srotedNum.length - 2];

  return maxPair - minPair;
};

console.log(maxProductDifference([5, 6, 2, 7, 4]));
console.log(maxProductDifference([4, 2, 5, 9, 7, 4, 8]));
