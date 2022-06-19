var isPowerOfTwo = function (n) {
    return Number.isInteger(Math.log2(n))
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(3));