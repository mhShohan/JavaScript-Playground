class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    // add to the beginning of Linked List => O(1)
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    // add to the end of the Linked List => O(n)
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    removeFromFront() {
        if (this.isEmpty()) {
            return null;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }

    removeFromEnd() {
        if (this.isEmpty()) {
            return null;
        }
        let value = this.tail.value;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let prev = this.head;
            while (prev.next !== this.tail) {
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        this.size--;
        return value;
    }


    // print list as an Array
    print() {
        if (this.isEmpty()) {
            console.log('List is Empty!');
        } else {
            let curr = this.head;
            const result = [];
            while (curr) {
                result.push(curr.value);
                curr = curr.next;
            }
            console.log(result);
        }
    }
}

// const list = new LinkedList();
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);

// list.append(00);
// list.append(10);

// list.print();
// list.removeFromFront();
// list.removeFromEnd();
// list.print();



/**
 * /////////////////
 * Linked List Stack
 * \\\\\\\\\\\\\\\\\
 */

class LinkedListStack {
    constructor() {
        this.list = new LinkedList();
    }
    push(value) {
        this.list.append(value);
    }
    pop() {
        return this.list.removeFromEnd();
    }
    peek() {
        return this.list.head.value;
    }
    isEmpty() {
        return this.list.isEmpty();
    }
    getSize() {
        return this.list.getSize();
    }
    print() {
        return this.list.print();
    }
}

// const stack = new LinkedListStack();
// console.log(stack.isEmpty());

// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log(stack.peek());
// stack.pop();
// stack.print();


/**
 * /////////////////
 * Linked List Queue
 * \\\\\\\\\\\\\\\\\
 */

class LinkedListQueue {
    constructor() {
        this.list = new LinkedList();
    }

    enqueue(value) {
        this.list.append(value);
    }

    dequeue() {
        return this.list.removeFromFront();
    }

    peek() {
        return this.list.head.value;
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    getSize() {
        return this.list.getSize();
    }

    print() {
        return this.list.print();
    }
}


const queue = new LinkedListQueue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();
queue.dequeue();
queue.print();