var average = function (salary) {
  let min = Math.min(...salary);
  let max = Math.max(...salary);

  let total = 0;
  let count = 0;
  for (let i = 0; i < salary.length; i++) {
    if (salary[i] !== min && salary[i] !== max) {
      total += salary[i];
      count++;
    }
  }
  return total / count;
};

console.log(average([8000, 9000, 2000, 3000, 6000, 1000]));
