
/**
 * Queue => A sequential collection of elements that follows the principle of First In First Out.(FIFO)
 */

class Queue {
    constructor() {
        this.items = [];
    }

    // add element to the last
    enqueue(element) {
        this.items.push(element);
    }

    // remove element to the first 
    dequeue() {
        this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[0];
        }
        return null;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items);
    }
}

const queue = new Queue();
queue.enqueue();

//////////////////////////////
// Queue implementation in optimized way
//////////////////////////////
class QueueOptimize {
    constructor() {
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }

    // add element to the last
    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }

    // remove element to the first 
    dequeue() {
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    isEmpty() {
        return this.rear - this.front === 0;
    }

    peek() {
        return this.items[this.front];
    }

    size() {
        return this.rear - this.front;
    }

    print() {
        console.log(this.items);
    }
}


const opQueue = new QueueOptimize();
opQueue.enqueue(10);
opQueue.enqueue(20);
opQueue.enqueue(30);
opQueue.enqueue(40);
// opQueue.dequeue();
console.log(opQueue.isEmpty());
console.log(opQueue.peek());


opQueue.print();