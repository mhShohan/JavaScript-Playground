var sumOddLengthSubarrays = function (arr) {
  let sum = 0;

  for (let i = 1; i <= arr.length; i++) {
    if (i % 2 === 1) {
      //For an odd length subarray
      for (let j = 0; j <= arr.length - i; j++) {
        //get all the subarrays
        sum += arr.slice(j, j + i).reduce((a, b) => a + b); //and get the sum of all subarrays
      }
    }
  }

  return sum;
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
