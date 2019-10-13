const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let node = new Node(data, null, null);
        if (!this._head) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;

        }
        this.length++;

        return this;
    }

    head() {
        return this._head ? this._head.data : null;
    }

    tail() {
        return this._tail ? this._tail.data : null;
    }

    at(index) {
        let _node = this._head;
        for (let i = 0; i < index; i++) {
            _node = _node.next;
        }
        return _node.data;
    }

    insertAt(index, data) {
    }

    isEmpty() {
        return !this.length;
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;

        return this;
    }

    deleteAt(index) {
        return
    }

    reverse() {
    }

    indexOf(data) {
        let _node = this._head;
        let index = null;
        for (let i = 0; i < this.length; i++) {
            _node = _node.next;
            if (index !== null)
                index = _node.data === data ? i : '';
        }
        return index ? index : -1;
    }
}

module.exports = LinkedList;
