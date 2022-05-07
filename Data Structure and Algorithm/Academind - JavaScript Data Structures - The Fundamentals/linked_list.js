class LinkedList {
  constructor() {
    this.head = null; // First element of the list
    this.tail = null; // Last element of the list
  }

  //find element from list
  find(val) {
    if (!this.head) return;
    let current = this.head;
    while (current) {
      if (current.value === val)
        return { value: current.value, next: current.next };
      current = current.next;
    }

    return null;
  }

  //add element at last of the list
  apend(val) {
    const newNode = { value: val, next: null };

    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;

    if (!this.head) {
      this.head = newNode;
    }
  }

  //add element after an element of the list
  insertAfter(val, afterVal) {
    const existingNode = this.find(afterVal);

    // console.log(existingNode);
    if (existingNode) {
      const newNode = { value: val, next: existingNode.next };
      existingNode.next = newNode;
      // console.log(existingNode);
    }
  }

  //add element at the first of the element
  prepend(val) {
    const newNode = { value: val, next: this.head };
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
  }

  //delete element from list
  deleteElement(val) {
    if (!this.head) return;
    if (this.head.value === val) {
      this.head = this.head.next;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value === val) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }

    if (this.tail.value === val) {
      this.tail = current;
    }
  }

  //print as an array
  toArray() {
    const elements = [];

    let current = this.head;

    while (current) {
      elements.push(current.value);
      current = current.next;
    }

    return elements;
  }
}

let linkedList = new LinkedList();

linkedList.apend(1);
linkedList.apend(2);
linkedList.apend(3);
linkedList.prepend(0);

// linkedList.deleteElement(3);
// console.log(linkedList.toArray());
// linkedList.insertAfter(2.5, 2);
// console.log(linkedList.head);
// console.log(linkedList.toArray());
