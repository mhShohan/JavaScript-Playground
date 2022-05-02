var moveZeroes = function (nums) {
  return nums.sort((a, b) => !!b - !!a);
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 1]));
console.log(moveZeroes([0, 0, 1]));
