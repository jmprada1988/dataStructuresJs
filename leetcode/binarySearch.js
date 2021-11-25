const search = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  let counter;
  while (low <= high) {
    counter = low + Math.floor((high - low) / 2);
    if (nums[counter] === target) return counter;
    if (target < nums[counter]) high = counter - 1;
    else low = counter + 1;
  }
  return -1;
};
