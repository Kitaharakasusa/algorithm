/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    for(let j = 0; j < nums.length; j++) {
        let n = nums[j];
        if(i < 2 || n > nums[i-2] ){
            nums[i++] = n;
        }
    }
    return i;
};