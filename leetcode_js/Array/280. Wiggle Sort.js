/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(i % 2 === 1) {
            if(nums[i - 1] > nums[i])swap(nums, i);
        }else if(i!==0 && nums[i-1] < nums[i])swap(nums, i);
    }
};

let swap = (nums, i) => {
    let temp = nums[i];
    nums[i] = nums[i-1];
    nums[i-1] = temp;
}