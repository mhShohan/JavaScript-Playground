class DoubleyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    };
    append(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        };
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    };
    prepend(value) {
        const newHead = {
            value: value,
            next: null,
            prev: null
        };
        newHead.next = this.head;
        this.head.prev = newHead;
        this.head = newHead;
        this.length++;
        return this;
    };
    insert(index, value) {
        let pre = this.head;
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        for (let i = 0; i < index - 1; i++) {
            pre = pre.next;
        }
        let aft = pre.next;
        const newNode = {
            value: value,
            next: null,
            prev: null
        };
        newNode.next = aft;
        newNode.prev = pre;
        pre.next = newNode;
        aft.prev = newNode;
        this.length++;
    };
    remove(index) {
        let delNode = null;
        if (index === 0) {
            delNode = this.head;
            this.head = delNode.next;
            this.head.prev = null;
            this.length--;
            return this;
        };
        let pre = this.head;
        for (let i = 0; i < index - 1; i++) {
            pre = pre.next;
        }
        let del = pre.next;
        let aft = del.next;
        pre.next = aft;
        del.pre = pre;
        aft.prev = pre;
        this.length--;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
        return array;
    };
};