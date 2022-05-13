///last in first out

class Stack {
  constructor() {
    this.data = [];
  }

  insert(value) {
    this.data[this.data.length] = value;
  }

  remove() {
    this.data.length = this.data.length - 1;
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  print() {
    return this.data;
  }
}

const stack = new Stack();

stack.insert(1);
stack.insert(2);
stack.insert(3);
stack.insert(4);

console.log(stack.peek());
console.log(stack.print());

stack.remove();

console.log(stack.peek());
console.log(stack.print());
