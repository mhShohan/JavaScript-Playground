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


console.log(primeNumbers(2, 20));