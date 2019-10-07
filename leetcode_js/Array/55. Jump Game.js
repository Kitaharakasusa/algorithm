/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let dp = new Array(nums.length).fill(0);
    for(let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i-1], dp[i-1]) - 1;
        if(dp[i] <=0) return false;
    }
    return true;
};

let canJump2 = function() {
    let n = nums.length, reach = 0;
    for (let i = 0; i < n; i++){
        if(i > reach || reach >= n - 1) break;
        reach = Math.max(reach, i +  nums[i]);
    }
    return reach >= n-1;
}