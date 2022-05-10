var dayOfYear = function (date) {
  let day = new Date(date).getDate();
  let month = new Date(date).getMonth();
  let year = new Date(date).getFullYear();

  let result = day;
  for (let i = 1; i <= month; i++) {
    result += new Date(year, i, 0).getDate();
  }

  return result;
};

console.log(dayOfYear('2019-02-10'));
console.log(dayOfYear('2003-03-01'));
