// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, low = null, high = null) {
  if(high !== null && node.data > high) {
    return false;
  }
  if(low !== null && node.data < low) {
    return false;
  }
  if(node.left && !validate(node.left, low, node.data)) {
    return false;
  }
  if(node.right && !validate(node.right, node.data, high )) {
    return false;
  }
  return true;
}

module.exports = validate;
