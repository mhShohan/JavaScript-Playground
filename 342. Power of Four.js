var isPowerOfFour = function (n) {
    return (Number.isInteger(Math.log(n) / Math.log(4)))
};

console.log(isPowerOfFour(16));
console.log(isPowerOfFour(5));
console.log(isPowerOfFour(1));