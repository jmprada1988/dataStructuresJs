const { invokeWith, getFromInput } = require("../readLine");

const pisano = (m) => {
  let prev = 0;
  let curr = 1;
  let res = 1;
  let limit = 1;
  for (let i = 0; i < limit; i++) {
    res = (prev + curr) % m;
    prev = curr;
    curr = res;

    if (prev === 0 && curr === 1) return i + 1;
    limit = limit + 1;
  }
};
function fibonacciModulo(n, m) {
  // Getting the period
  let pisanoPeriod = pisano(m);
  console.log("Pisano:", pisanoPeriod);
  n = n % pisanoPeriod;

  let prev = 0;
  let curr = 1;

  if (n == 0) return 0;
  else if (n == 1) return 1;

  for (let i = 0; i < n - 1; i++) {
    let temp = 0;
    temp = curr;
    curr = (prev + curr) % m;
    prev = temp;
  }
  return curr % m;
}

function getPisanoPeriod(line) {
  const a = parseInt(line[0], 10);
  const b = parseInt(line[1], 10);

  console.log(fibonacciModulo(a, b));
  // let a = 0;
  // let b = 1;
  // let c = 1;
  // limit = 1;
  // for (let i = 0; i < limit; i++) {
  //   c = (a + b) % m;
  //   a = b;
  //   b = c;
  //   if (a == 0 && b == 1) return i + 1;
  //   limit = limit + 1;
  // }
}
getFromInput(getPisanoPeriod);
// console.log(getPisanoPeriod(4));
