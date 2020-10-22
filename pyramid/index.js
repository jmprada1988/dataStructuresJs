// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let middle = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let floor = "";
    for (let col = 0; col < 2 * n - 1; col++) {
      if (middle - row <= col && middle + row >= col) {
        floor += "#";
      } else {
        floor += " ";
      }
    }
    console.log(floor);
  }
}

function recursivePyramid(n, row = 0, floor = "") {
  if (row === n) return;
  if (floor.length === 2 * n - 1) {
    console.log(floor);
    return recursivePyramid(n, row + 1);
  }
  let middle = Math.floor((2 * n - 1) / 2);
  let add =
    middle - row <= floor.length && middle + row >= floor.length ? "#" : " ";
  recursivePyramid(n, row, floor + add);
}

module.exports = {
  pyramid,
  recursivePyramid,
};
