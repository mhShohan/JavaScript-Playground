/**
 * Graph => Is a non-linear data structure that consist of a finite number of nodes connected by edges.
 * 
 * Graph Representation 
 *  => Adjacency Matrix
 *  => Adjacency List
 */

//Adjacency Matrix
const adjacencyMatrix = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
];

// Adjacency List
const adjacencyList = {
    'A': ['B'],
    'B': ['A', 'C'],
    'C': ['B']
};


class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.adjacencyList(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.adjacencyList(vertex2);
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return;
        }
        for (let adjacencyVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacencyVertex);
        }
        delete this.adjacencyList[vertex];
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        );
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
        }
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');

graph.display();
console.log(graph.hasEdge('A', 'B'));