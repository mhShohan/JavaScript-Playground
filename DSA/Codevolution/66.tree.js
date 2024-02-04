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
 * Search    => To find a node given its value 
 * DFS & BFS => To visit all node given its value
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

    // find the value 
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

    /**
     * Tree Traversal => visiting every node in the tree
     * A hierarchical data structure like a tree can be Traversal in different way
     * => Depth First Search (DFS)
     * => Breadth First Search (BFS)
     */

    /**
     * ///////////////////////////////////
     * Depth First Search (DFS) Traversal
     * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
     */
    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    /**
     * ///////////////////////////////////
     * Breadth First Search (DFS) Traversal
     * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
     */

    levelOrder() {
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }

    max(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }

    // remove node from the tree
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }
    deleteNode(root, value) {
        if (root === null) return root;
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if (!root.left && !root.right) {
                return null;
            }
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

bst.delete(15);
bst.delete(7);
// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 40));
// console.log(bst.preOrder(bst.root));
// console.log(bst.inOrder(bst.root));
// console.log(bst.postOrder(bst.root));
console.log(bst.levelOrder());
// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));
console.log(bst);