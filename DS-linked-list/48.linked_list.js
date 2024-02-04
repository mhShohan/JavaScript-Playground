/**
 * Linked List => is a linear data structure that includes a series of connected node.
 * Each node consist of a data value and a pointer that points to the next node 
 * This list elements can be easily inserted or removed without reallocation or re organization of the entire structure
 * Linked List data structure supports three main operations
 *     => Insertion: add element at the start,end and given index 
 *     => Deletion : remove element given index or value
 *     => Search   : find an element by given value
 */


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
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
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    //insert at index
    insert(value, index) {
        if (index < 0 || index > this.size) {
            return;
        }
        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;

            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    // search the index by value
    findIndex(value) {
        if (this.isEmpty()) return -1;

        let index = 0;
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return index;
            }
            curr = curr.next;
            index++;
        }
        return -1;
    }

    // remove item by index
    removeByIndex(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        return removedNode.value;
    }

    // remove by value
    removeByValue(value) {
        if (this.isEmpty()) {
            return null;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let prev = this.head;
            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if (prev.next) {
                let removedNode = prev.next;
                prev.next = removedNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
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

const list = new LinkedList();
list.prepend(10);
list.prepend(20);
list.prepend(30);

list.append(0);
list.append(10);
list.insert(5, 4);

list.print();
// list.removeByValue(10);
// list.removeByValue(10);
// console.log(list.findIndex(100));
list.reverse();
list.print();