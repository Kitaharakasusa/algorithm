/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let res = 0, n = nums.length, i = 0, cur = 0;
    while (cur < n - 1) {
        res++;
        let pre = cur;
        for(; i <= pre; i++) {
            cur = Math.max(cur, i + nums[i]);
        }
        // if(pre =-- cur) retrun 
    }
    return res;
};