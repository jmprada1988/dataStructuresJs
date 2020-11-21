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
    const n = new Node(data);

    if (this.head) {
      n.next = this.head;
      this.head = n;
    } else {
      this.head = n;
    }
  }
}

module.exports = { Node, LinkedList };
