/**
 * Cartesian Product  => O(n^2)
 */

function cartesianProduct(arrOne, arrTwo) {
    let newArr = [];

    for (let i = 0; i < arrOne.length; i++) {
        for (let j = 0; j < arrTwo.length; j++) {
            newArr.push([arrOne[i], arrTwo[j]]);
        }
    }

    return newArr;
}

// console.log(cartesianProduct([1, 2, 3], [4, 5, 6]));




/**
 * Climbing Staircase
 * Big-O --- O(n)
 */

function climbingStaircase(n) {
    const noOfWays = [1, 2];

    for (let i = 2; i <= n; i++) {
        noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
    }
    return noOfWays[n - 1];
}

// console.log(climbingStaircase(2));
// console.log(climbingStaircase(3));
// console.log(climbingStaircase(4));
// console.log(climbingStaircase(5));



/**
 * Tower of hanoi
 * Big-O => O(2^n)
 */

function towerOfHanoi(n, fromRod, toRod, usingRod) {
    if (n === 1) {
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
        return;
    }
    towerOfHanoi(n - 1, fromRod, usingRod, toRod);
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(5, 'A', 'C', 'B');