const arr = [4, 1, 3, 2, 0, -1, 7, 10, 9, 20];

const merge = (data, start, mid, end) => {
  let numArr = [];
  let i = start, j = mid + 1, k = 0;

  while (i <= mid && j <= end) {
    if (data[i] <= data[j]) {
      numArr[k] = data[i];
      i++;
      k++;
    } else {
      numArr[k] = data[j];
      j++;
      k++;
    }
  }

  while (i <= mid) {
    numArr[k] = data[i];
    k++;
    i++;
  }

  while (i <= end) {
    numArr[k] = data[j];
    k++;
    j++;
  }

  for (let i = start; i <= end; i++) {
    data[i] = numArr[i - start];
  }
};

const mergeSort = (data, start, end) => {
  if (start < end) {
    let mid = (start + end) / 2;
    mergeSort(data, start, mid);
    mergeSort(data, mid + 1, end);

    merge(data, start, mid, end);
  }
};

console.log(mergeSort(arr, 0, arr.length - 1));