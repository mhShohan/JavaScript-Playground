const decimalToBinary = (num, result = '') => {
  if (num === 0) {
    return result;
  }

  result = num % 2 + result;
  return decimalToBinary(Math.floor(num / 2), result);
};


console.log(decimalToBinary(233));
console.log(decimalToBinary(87654));