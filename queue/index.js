// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor(n) {
    this.results = [];
    this.number = n;
  }

  add(n) {
    this.results.unshift(n);
  }
  remove() {
    const num = this.results[this.results.length - 1];
    this.results.pop();
    return num;
  }
}

module.exports = Queue;
