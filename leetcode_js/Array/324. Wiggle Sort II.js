/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    nums.sort( (a, b) => {
        return a - b;
    });
    let tmp = [...nums];
    let n = nums.length, k = Math.floor((n+1)/2), j = n;
    for(let i = 0; i < n; i++) {
        nums[i] = i& 1 ?  tmp[--j] : tmp[--k];
    }
    return nums;
};


console.log(wiggleSort([1, 3, 2, 2, 3, 1]));

var wiggleSort2 = function(nums) {
   
};