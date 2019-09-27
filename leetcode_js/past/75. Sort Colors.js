/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let num = nums.length;
    let bound0 = 0, bound2 = num - 1;
    for (let i = 0; i <= bound2; i++) {
        while (nums[i] === 2 && bound2 > i) {
            let temp = nums[i];
            nums[i] = nums[bound2];
            nums[bound2] = temp;
            bound2--;
        }
        while (nums[i] === 0 && bound0 < i) {
            let temp = nums[i];
            nums[i] = nums[bound0];
            nums[bound0] = temp;
            bound0++;
            // [nums[i],nums[bound0]] =  [nums[bound0],nums[i]];
        }
    }
    return nums;
};
console.log(sortColors([1,0,2,2,1,0]));