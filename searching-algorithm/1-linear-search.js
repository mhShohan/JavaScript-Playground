const numbArr = [4, 2, 6, 21, 7, 1, 42, 34, 23, 8, 4];

// Big O(n)
const linearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }

  return -1;
};

console.log(linearSearch(numbArr, 10));