import { Node } from './nodeClass.js';

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        let node = new Node(value);
        if (this.head === null) {
            this.head = node;
            return;
        } else {
            let currentNode = this.head;
            while (currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = node;
        }
    }

    prepend(value) {
        let node = new Node(value);
        node.nextNode = this.head;
        this.head = node;
    }

    size() {
        let count = 0;
        let currentNode = this.head;
        while (currentNode !== null) {
            count++;
            currentNode = currentNode.nextNode;
        }
        return count;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        let currentNode = this.head;
        while (currentNode !== null && currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    at(index) {
        if (index < 0) return null;

        let currentNode = this.head;
        let count = 0;

        while (currentNode !== null) {
            if (count === index) {
                return currentNode;
            }
            currentNode = currentNode.nextNode;
            count++;
        }

        return null;
    }

    pop() {
        if (this.head === null) return null;

        let currentNode = this.head;
        if (currentNode.nextNode === null) this.head = null;

        while (currentNode !== null && currentNode.nextNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = null;

    }

    contains(value) {
        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.nextNode;

        }
        return false;
    }

    find(value) {
        let currentNode = this.head;
        let index = 0;

        while (currentNode !== null) {
            if (currentNode.value === value) {
                return index;
            }
            currentNode = currentNode.nextNode;
            index++;
        }

        return null;
    }

    toString() {
        let output = '';
        let currentNode = this.head;
        while (currentNode !== null) {
            output += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.nextNode;
        }
        output += 'null';
        return output;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.size()) return null;
        if (index == 0) this.prepend(value);

        let currentNode = this.head;
        let node = new Node(value);
        let currentIndex = 0;

        while (currentIndex < index - 1) {
            currentNode = currentNode.nextNode;
            currentIndex++;
        }

        node.nextNode = currentNode.nextNode;
        currentNode.nextNode = node;
    }
    removeAt(index) {
        if (index < 0 || index >= this.size()) return null;
        if (index == 0) this.head = this.head.nextNode;

        let currentNode = this.head;
        let currentIndex = 0;

        while (currentIndex < index - 1) {
            currentNode = currentNode.nextNode;
            currentIndex++;
        }

        currentNode.nextNode = currentNode.nextNode.nextNode;
    }
};

export { LinkedList };