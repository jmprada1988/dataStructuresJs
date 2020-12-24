// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// Helper method to swap two indexes in array.
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  },
  data = [89, 1];

function bubbleSort(arr) {
  //variable to optimaze iterations unneeded
  let noSwaps = true;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

function selectionSort(arr) {
  let noSwap = true;
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        swap(arr, min, j);
        noSwap = false;
      }
    }
    if (noSwap) continue;
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const center = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, center)), mergeSort(arr.slice(center)));
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }

  return [...result, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
