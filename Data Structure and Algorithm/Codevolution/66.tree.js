/**
 * Tree => Tree is a hierarchical data structure that consist of nodes connected by edges
 * A tree is a non-linear data structure, compared to arrays, linked list, stacks and queues which are linear data structure.
 * A tree will not contain any loops or cycles
 */

/**
 * Tree Terminology
 * ////////////////
 *  => Parent
 *  => Leaf 
 *  => Siblings
 *  => Ancestor
 *  => Path
 *  => Distance
 *  => Degree
 *  => Depth
 *  => Depth
 *  => Height
 */

/**
 * Binary Tree => A Binary Tree is a tree data structure in which each node has at most two children.
 * They referred to as left child and right child
 */

/**
 * Binary Search Tree => 
 * The value of each left node must be smaller then Parent node
 * The value of each right node must be greater then Parent node
 * Each node has at most two children
 * ////////////////////////////
 * Insertion => to add a node to the tree
 * Search => To find a node given its value 
 * DFS & BFS =< To visit all node given its value
 */


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    // add element
    insert(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    // recursive method to insert element
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false;
        } else {
            if (root.value === value) {
                return true;
            } else if (value < root.value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }



}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(17);

console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 40));