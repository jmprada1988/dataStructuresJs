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
  if (n < 1) return 0;
  if (n < 2) return 1;
  return recursiveFib(n - 2) + recursiveFib(n - 1);
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

module.exports = { iterativeFib, recursiveFib };
