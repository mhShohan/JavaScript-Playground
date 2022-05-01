var largestPerimeter = function (nums) {
  let sortArr = nums.sort((a, b) => b - a);
  for (let i = 0; i < sortArr.length - 2; i++) {
    let a = sortArr[i];
    let b = sortArr[i + 1];
    let c = sortArr[i + 2];

    if (a < b + c) {
      return a + b + c;
    }
  }
  return 0;
};
