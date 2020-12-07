// Complete the rotLeft function below.
function rotLeft(a, d) {
  let counter = 0;
  let start = 0;
  while (counter < d) {
    start = a.shift()
    a.push(start)
    counter++;
  }
  return a;
}

console.log(rotLeft([1,2,3,4,5],4))