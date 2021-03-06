/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length, right = 1;
    let res = new Array(n);
    res[0] = 1;
    for(let i = 1; i < n; i++){
        res[i] = res[i-1] * nums[i - 1];
    }
    for(let i = n - 1; i >= 0; i--) {
        res[i] *= right;
        right *=nums[i];
    }
    return res;
};