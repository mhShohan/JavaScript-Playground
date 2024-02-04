const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    // write your solution here
    let day1 = new Date(dateText1).getTime();
    let day2 = new Date(dateText2).getTime();

    return (Math.max(day1, day2) - Math.min(day1, day2)) / DAY_IN_MILLISECONDS;
}

console.log(getDaysBetweenDates('10/15/2020', '12/1/2020'));
