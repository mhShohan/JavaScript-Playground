/**
 * Search Algorithms
 *      => Linear Search
 *      => Binary Search
 *      => Recursive Binary Search
 */


/**
 * Linear Search
 */
const numbers = [4, 8, 5, 9, 6, 8, -9, 3, 1, -7, 0, 2];

function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }
    return -1;
}

// console.log(linearSearch(numbers, 13));



/**
 * Binary Search => only works on sorted Array
 * Big-O => O(log(n))
 */
const numbArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (target === arr[middleIndex]) {
            return middleIndex;
        }
        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}

// console.log(binarySearch(numbArr, 7));
// console.log(binarySearch(numbArr, 3));
// console.log(binarySearch(numbArr, 30));




/**
 * Recursive Binary Search
 * Big-O => O(log(n))
 */
function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) return -1;

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === arr[middleIndex]) {
        return middleIndex;
    }
    if (target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex - 1);
    } else {
        return search(arr, target, middleIndex + 1, rightIndex);
    }

}

// console.log(recursiveBinarySearch(numbArr, 3));
// console.log(recursiveBinarySearch(numbArr, 7));
// console.log(recursiveBinarySearch(numbArr, 70));