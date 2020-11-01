// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
// simple recursive solution
function recursiveFib(n) {
  if (n < 2) return n;
  return memoizeFib(n - 2) + memoizeFib(n - 1);
}

function iterativeFib(n) {
  let previousFirts = 0,
    previousSecond = 1,
    next = 1;

  for (let i = 2; i <= n; i++) {
    next = previousFirts + previousSecond;
    previousFirts = previousSecond;
    previousSecond = next;
  }

  return next;
}

function iterativeFib2(n) {
  let results = [0, 1];
  for (let i = 2; i <= n; i++) {
    results.push(results[i - 1] + results[i - 2]);
  }
  return results[n];
}

function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const results = fn.apply(this, args);

    cache[args] = results;
    return results;
  };
}
const memoizeFib = memoize(recursiveFib);

module.exports = { iterativeFib, iterativeFib2, recursiveFib, memoizeFib };
