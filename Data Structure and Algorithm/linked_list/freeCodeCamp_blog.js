class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  //show all
  show() {
    let node = this.head;

    while (node) {
      console.log(node.data);
      node = node.next;
    }
    return;
  }

  ///get the size of node
  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      console.log(node.data);
      node = node.next;
    }
    return count;
  }

  // remove all from node
  clear() {
    this.head = null;
  }

  //get first node
  getFirstNode() {
    return this.head;
  }

  //get last node
  getLastNode() {
    let last = this.head;

    if (last) {
      while (last.next) {
        last = last.next;
      }
    }

    return last;
  }
}

let node1 = new ListNode('Mehdi');
let node2 = new ListNode('Hasan');
let node3 = new ListNode('Shohan');
node1.next = node2;
node2.next = node3;

let list = new LinkedList(node1);

// console.log(list);
console.log(list.show());
// console.log(list.size());
// console.log(list.getFirstNode());
// console.log(list.getLastNode());
