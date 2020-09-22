/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
    let sum = 0, max = 0;
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        if (sum === k) {
            max = i + 1;
        }else if(map.has(sum - k)) {
            max = Math.max(max, i - map.get(sum - k));
        }

        if(!map.has(sum)) {
            map.set(sum, i);
        }
    }
    return max;
};