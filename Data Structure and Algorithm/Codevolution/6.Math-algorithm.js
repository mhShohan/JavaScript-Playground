/**
 * Big-O Guide
 *      calculation is not dependent on input size => O(1)
 *      1. Loop => O(n)
 *      2. Nested Loop => O(n^2)
 *      3. input size reduced by half => O(log(n)) 
 * 
 */


/**
 * Math Algorithms
 * 
 * => Fibonacci Sequence
 * => Factorial of a number
 * => Prime number
 * => Power of two 
 * => Recursion
 * => Fibonacci Sequence with Recursion
 * => Factorial of a number with Recursion
 */


/**
 * Fibonacci Sequence
 */
function fibonacci(n) {
    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}
// console.log(fibonacci(5)); //[ 0, 1, 1, 2, 3 ]



/**
 * Factorial
 */
function factorial(n) {
    let fact = 1;
    for (let i = n; i > 1; i--) {
        fact *= i;
    }
    return fact;
}
// console.log(factorial(5)) // 120


/**
 * Check prime number
 */
function isPrimeNumber(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }

    return true;
}

// console.log(isPrimeNumber(3)); // true
// console.log(isPrimeNumber(4)); // false



/**
 * Power Of Two
 */

// Big-O => O(n)
function isPowerOfTwo(n) {
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n / 2;
    }
    return true;
}

// console.log(isPowerOfTwo(1)); // true
// console.log(isPowerOfTwo(2)); // true
// console.log(isPowerOfTwo(3)); // false
// console.log(isPowerOfTwo(4)); // true



// Big-O => O(1)
function isPowerOfTwoBitWise(n) {
    if (n < 1) {
        return false;
    }

    return (n & (n - 1)) === 0;
}


// console.log(isPowerOfTwoBitWise(1)); // true
// console.log(isPowerOfTwoBitWise(2)); // true
// console.log(isPowerOfTwoBitWise(3)); // false
// console.log(isPowerOfTwoBitWise(4)); // true




/**
 * Recursive Fibonacci Sequence
 */
function recursiveFibonacci(n) {
    if (n < 2) {
        return n;
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

// console.log(recursiveFibonacci(6)); // 8


/**
 * Recursive Factorial 
 */
function recursiveFactorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(5));