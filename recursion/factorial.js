const { memoize } = require("../utils");

factorial = (num) => {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
};

factorialRecursive = (num) => {
  if (num < 0) return 0;
  if (num === 1) return 1;
  return num * memoizeFactorial(num - 1);
};
const memoizeFactorial = memoize(factorialRecursive);
console.log(memoizeFactorial(50));
