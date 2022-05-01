var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b);
  let diff = undefined;

  for (let i = 0; i < arr.length - 1; i++) {
    let checkDiff = arr[i + 1] - arr[i];
    if (diff === undefined) {
      diff = checkDiff;
    } else {
      if (checkDiff != diff) return false;
    }
  }

  return true;
};

console.log(canMakeArithmeticProgression([3, 5, 1]));
console.log(canMakeArithmeticProgression([1, 2, 4]));
