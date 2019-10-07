/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let len = citations.length;

    citations.unshift(0);
    let low = 0;
    let high = len;
    let mid;
    let max = 0;
    while (low <= high) {
      mid = (low + high) >> 1;
  
      // numbers count >= citations[mid]
      let largetLeft = len - mid + 1;
      
      if (citations[mid] >= largetLeft) {
        max = Math.max(max, largetLeft);
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  
    return max;
};