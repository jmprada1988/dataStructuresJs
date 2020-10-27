// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  let counter = 1,
    startRow = 0,
    startCol = 0,
    endRow = n - 1,
    endCol = n - 1;

  while (startCol <= endCol && startRow <= endRow) {
    // from 0.0 to n.0
    for (let i = startCol; i <= endCol; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;
    // from n.0 to n.-n
    for (let i = startRow; i <= endRow; i++) {
      results[i][endCol] = counter;
      counter++;
    }
    endCol--;
    // from n.-n to 0+1, -n + 1
    for (let i = endCol; i >= startCol; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;
    // from -n+1 to 1.-1
    for (let i = endRow; i >= startRow; i--) {
      results[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }
  startRow++;
  return results;
}

console.log(matrix(5));
module.exports = matrix;
