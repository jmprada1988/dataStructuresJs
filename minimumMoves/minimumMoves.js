function minimumMoves(a, b) {
  const iter = {};

  // Determines the steps to equal two numbers
  const stepsToEqual = (num1, num2) => {
    const counter = Math.abs(num1 - num2);
    return counter
  };

  //Helper function to determine moves comparing two indexes in array 1 and array 2
  const compareMatch = (arr) => {
    const a = (arr[0] + "").split(""),
      b = (arr[1] + "").split("");
    numMoves = 0;
    for (let i = 0; i < a.length; i++) {
      numMoves += stepsToEqual(parseInt(a[i]), parseInt(b[i]));
    }
    console.log("Moves required per number:", numMoves);
    return numMoves;
  };

  for (let i = 0; i < a.length; i++) {
    iter[i + ""] = [a[i], b[i]];
  }
  result = 0;
  for (key in iter) {
    result += compareMatch(iter[key]);
  }
  return result;
}
console.log(minimumMoves([123, 543], [321, 279]));
module.exports = {
  minimumMoves
}