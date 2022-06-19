// my solution
var middleNode = function (head) {
  return head.slice(Math.floor(head.length / 2));
};

var middleNodeFromOthers = function (head) {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

console.log(middleNodeFromOthers([1, 2, 3, 4, 5]));
console.log(middleNodeFromOthers([1, 2, 3, 4, 5, 6]));
