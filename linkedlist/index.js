// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    let count = 0,
      node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let node = this.head,
      last = null;

    while (node) {
      last = node;
      node = node.next;
    }
    return last;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let prev = this.head;
    let node = this.head.next;
    while (node.next) {
      prev = node;
      node = node.next;
    }
    prev.next = null;
  }
  insertLast(data) {
    const node = new Node(data),
      last = this.getLast();
    last ? (last.next = node) : (this.head = node);
  }
  getAt(n) {
    let node = this.head,
      counter = 0;
    while (node) {
      if (n === counter) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }
  removeAt(n) {
    if (!this.head) return;
    if (n === 0) {
      this.head = this.head.next;
      return;
    }

    const prev = this.getAt(n - 1);
    if (!prev || !prev.next) return;
    prev.next = prev.next.next;

    return null;
  }
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const prev = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, prev.next);
    prev.next = node;
  }
}

module.exports = { Node, LinkedList };
