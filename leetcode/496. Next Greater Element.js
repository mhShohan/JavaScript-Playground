var nextGreaterElement = function (nums1, nums2) {
  let arr = [];
  for (let i of nums1) {
    let x = nums2.indexOf(i);
    let flag = false;

    for (let j = x + 1; j < nums2.length; j++) {
      if (nums2[j] > i) {
        arr.push(nums2[j]);
        flag = true;
        break;
      }
    }
    if (flag == false) {
      arr.push(-1);
    }
  }
  return arr;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
