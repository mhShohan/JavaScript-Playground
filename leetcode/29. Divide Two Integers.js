const MAX_INT = 2 ** 31 - 1;
const MIN_INT = -1 * 2 ** 31;

var divide = function (dividend, divisor) {
    const res = parseInt(dividend / divisor);

    if (res > MAX_INT) return MAX_INT;

    if (res < MIN_INT) return MIN_INT;

    return res;
};

console.log(divide(10, 3));
console.log(divide(7, -3));
