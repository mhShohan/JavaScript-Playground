//first in first out

class Queue {
  constructor() {
    this.data = [];
  }

  insert(value) {
    this.data[this.data.length] = value;
  }

  remove() {
    for (let i = 0; i < this.data.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.data.length = this.data.length - 1;
  }

  print() {
    return this.data;
  }
}

const queue = new Queue();
queue.insert(1);
queue.insert(2);
queue.insert(3);
queue.insert(4);

console.log(queue.print());

queue.remove();
console.log(queue.print());
