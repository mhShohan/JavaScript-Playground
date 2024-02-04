class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Inset First node
  insertFirstNode(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //Inset last node
  insertLastNode(data) {
    let node = new Node(data);
    let current;

    //   if empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  //Inset at index
  insertAt(data, index) {
    //   if index is out of range
    if (index > 0 && index > this.size) return;

    //if first index
    if (index === 0) {
      this.insertFirstNode(data);
      return;
    }

    let node = new Node(data);
    let current, previous;

    //set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }
    node.next = current;
    previous.next = node;

    this.size++;
  }

  //Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (index === count) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  //Remove at index
  removeAt(index) {
    //   if index out of range
    if (index > 0 && index > this.size) return;

    let current = this.head;
    let previous,
      count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  //Clear the list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  //Print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.insertFirstNode(100);
linkedList.insertLastNode(200);
linkedList.insertLastNode(400);
linkedList.insertLastNode(500);

linkedList.insertAt(300, 3);

// linkedList.removeAt(0);

// linkedList.clearList();

// linkedList.getAt(4);

linkedList.printListData();
