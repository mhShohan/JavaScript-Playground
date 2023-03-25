/**
 * Sort Algorithm
 *      => Bubble Sort
 *      => Insertion Sort 
 *      => Quick Sort
 *      => Merge Sort
 */

/** 
 * Bubble Sort => Big-O => O(n^2)
 */
const numbers = [9, 1, 8, 2, 7, 3, 6, 4, 5];

function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

// bubbleSort(numbers);
// console.log(numbers);




/**
 * Insertion Sort => Big-O => O(n^2)
 */
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = numberToInsert;
    }
}
// insertionSort(numbers);



/**
 * Quick Sort =>Big-O => O(log(n))
 */

function quickSort(arr) {
    if (arr.length < 2) return arr;

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// const arr = quickSort(numbers);
// console.log(arr);



/**
 * Merge Sort =>Big-O => O(nlog(n))
 */

function mergeSort(arr) {
    if (arr.length < 2) return arr;

    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    const sortedArr = [];

    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
}

console.log(mergeSort(numbers));