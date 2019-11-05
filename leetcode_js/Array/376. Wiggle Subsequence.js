/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    let p = 1, q = 1, n = nums.length;
    for (let i = 1; i < n ; i++) {
        if(nums[i] > nums[i-1]) p = q + 1;
        else if (nums[i] < nums[i-1]) q = p + 1;
    }
    return Math.min(n, Math.max(p, q));
    
};