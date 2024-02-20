/**
 * 
 * @param {number} n 
 * @returns 
 */
const isPrime = (n) => {
    if (n <= 1) return false;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }

    return true;
};


/**
 * 
 * @param {number} start 
 * @param {number} end 
 * @returns 
 */
const primeNumbers = (start, end) => {
    const primeNumbersArray = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primeNumbersArray.push(i);
        }
    }

    return primeNumbersArray;
};

/**
 * 
 * @param {number} num 
 * @returns 
 */
const checkPrimeOptimized = (num) => {
    if (num <= 0) return false;
    if (num === 2) return true;

    if (num % 2 === 0) return false;
    else {
        for (let i = 3; i < Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
    }

    return true;
};

console.time();
console.log(isPrime(342347268323412));
console.timeEnd();

console.time();
console.log(checkPrimeOptimized(342347268323412));
console.timeEnd();