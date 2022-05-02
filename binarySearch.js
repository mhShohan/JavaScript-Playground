let numbers = [];

for (let i = 0; i < 10000000; i++) {
  numbers.push(i);
}

function binarySearch(arr, num) {
  let mid,
    left = 0,
    right = arr.length - 1;

  while (left <= right) {
    mid = (left + (right - left)) / 2;

    if (arr[mid] == num) {
      return mid;
    }

    if (arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
console.time('d');
console.log(numbers.find((a) => a === 4999));
console.timeEnd('d');

console.time('i');
console.log(binarySearch(numbers, 4999));
console.timeEnd('i');
