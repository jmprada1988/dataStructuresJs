// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// Helper method to swap two indexes in array.
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  },
  data = [89, 1, 2, 3, 48, 5, 6, 7, 10, 45, 56, 67, 87];

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

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
