var daysBetweenDates = function (date1, date2) {
    const time1 = new Date(date1)
    const time2 = new Date(date2)

    return Math.abs(time1 - time2) / (1000 * 60 * 60 * 24)
};

console.log(daysBetweenDates("2019-06-29", "2019-06-30"));
console.log(daysBetweenDates("2020-01-15", "2019-12-31"));