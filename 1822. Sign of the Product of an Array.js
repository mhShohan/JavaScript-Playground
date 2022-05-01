var arraySign = function (nums) {
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    let num;
    if (nums[i] > 0) num = 1;
    if (nums[i] < 0) num = -1;
    if (nums[i] === 0) num = 0;

    product *= num;
  }
  if (product === -0) return Math.abs(product);
  return product;
};

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]));
console.log(arraySign([1, 5, 0, 2, -3]));
console.log(arraySign([-1, 1, -1, 1, -1]));
