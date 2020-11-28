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
    // this.head = new Node(data, this.head);
    this.insertAt(data, 0);
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
    // return this.head;
    return this.getAt(0);
  }
  getLast() {
    // let node = this.head,
    //   last = null;

    // while (node) {
    //   last = node;
    //   node = node.next;
    // }
    // return last;
    return this.getAt(this.size() - 1);
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    // if (!this.head) return;
    // this.head = this.head.next;
    this.removeAt(0);
  }
  removeLast() {
    // if (!this.head) return;
    // if (!this.head.next) {
    //   this.head = null;
    //   return;
    // }
    // let prev = this.head;
    // let node = this.head.next;
    // while (node.next) {
    //   prev = node;
    //   node = node.next;
    // }
    // prev.next = null;
    this.removeAt(this.size() - 1);
  }
  insertLast(data) {
    // const node = new Node(data),
    //   last = this.getLast();
    // last ? (last.next = node) : (this.head = node);
    this.insertAt(data, this.size());
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
  forEach(fn) {
    if (!this.head) return;
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

const l = new LinkedList();

l.insertLast(1);
l.insertLast(2);
l.insertLast(3);
l.insertLast(4);

l.forEach((node) => {
  node.data += 10;
});

module.exports = { Node, LinkedList };
