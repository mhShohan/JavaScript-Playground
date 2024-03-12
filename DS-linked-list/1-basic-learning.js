class Node {
    constructor() {

    }
}

class LinkedList {
    constructor() {
        this.head = null; // first element of the list
        this.tail = null; // last element of the list
    }

    //---------------------------------------
    // add element at the last of linked list
    //---------------------------------------
    append(value) {
        const newNode = { value, next: null };

        if (this.tail) {
            this.tail.next = newNode;
        }

        this.tail = newNode;

        if (!this.head) {
            this.head = newNode;
        }
    }

    //---------------------------------------
    // add element at the first of linked list
    //---------------------------------------
    prepend(value) {
        const newNode = { value, next: this.head };

        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
    }

    //---------------------------------------
    // remove all element from linked list which equal to the value
    //---------------------------------------
    deleteMany(value) {
        if (!this.head) return;

        // if the value is in the first node
        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let currentNode = this.head;

        while (currentNode.next) {
            if (currentNode.next.value === value) {
                currentNode.next = currentNode.next.next;
            } else {
                currentNode = currentNode.next;
            }
        }

        // if the value is in last node
        if (this.tail.value === value) {
            this.tail = currentNode;
        }
    }

    //---------------------------------------
    // Find element 
    //---------------------------------------
    find(value) {
        if (!this.head) {
            return null;
        }
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        return null;
    }

    //---------------------------------------
    // insert element after the value found
    //---------------------------------------
    insertAfter(value, after) {
        const existedNode = this.find(after);

        if (existedNode) {
            const newNode = { value, next: existedNode.next };
            existedNode.next = newNode;
        }
    }

    //---------------------------------------
    // print elements as array
    //---------------------------------------
    toArray() {
        const elements = [];
        let currentNode = this.head;

        while (currentNode) {
            elements.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return elements;
    }
}

const linkListOne = new LinkedList();
linkListOne.append(5);
linkListOne.append(10);
linkListOne.append(15);
linkListOne.append(15);
linkListOne.prepend(1);
linkListOne.prepend(1);
linkListOne.append(20);

console.log(linkListOne.toArray());
linkListOne.insertAfter(2, 1);
linkListOne.insertAfter(16, 15);
// linkListOne.deleteMany(1);
// linkListOne.deleteMany(15);
// linkListOne.deleteMany(20);
console.log(linkListOne.toArray());

// console.log(linkListOne.find(20));

