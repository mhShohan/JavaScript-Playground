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
  //Get at index
  //Remove at index
  //Clear the list
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
linkedList.insertLastNode(300);
linkedList.insertLastNode(400);

linkedList.printListData();
