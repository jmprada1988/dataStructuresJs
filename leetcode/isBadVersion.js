const solution = (isBadVersion) => {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  return function (n) {
    let low = 1;
    let high = n;
    let middle;
    while (low < high) {
      middle = low + Math.floor((high - low) / 2);
      if (isBadVersion(middle)) {
        high = middle;
      } else {
        low = middle + 1;
      }
    }
    return low;
  };
};
