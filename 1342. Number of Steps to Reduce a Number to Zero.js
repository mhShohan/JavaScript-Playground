var numberOfSteps = function (num) {
  let count = 0;
  let number = num;

  while (number !== 0) {
    if (number % 2 === 0) {
      number = number / 2;
    } else {
      number -= 1;
    }
    count++;
  }

  return count;
};

console.log(numberOfSteps(14));
console.log(numberOfSteps(8));
console.log(numberOfSteps(123));
