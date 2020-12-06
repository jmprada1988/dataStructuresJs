// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const fl = "s",
    level = [0],
    flags = [root, fl];
  while (flags.length > 1) {
    const node = flags.shift();
    if (node === "s") {
      level.push(0);
      flags.push(fl);
    } else {
      flags.push(...node.children);
      level[level.length - 1]++;
    }
  }
  return level;
}

module.exports = levelWidth;
