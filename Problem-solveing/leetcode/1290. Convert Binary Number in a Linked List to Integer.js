//my sloution
var getDecimalValue = function (head) {
  let result = 0;
  for (let i = 0; i < head.length; i++) {
    result += head[i] * Math.pow(2, i);
  }
  return result;
};

var getDecimalValue = function (head) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return parseInt(arr.join``, 2);
};

console.log(getDecimalValue([1, 0, 1]));
console.log(getDecimalValue([0]));
