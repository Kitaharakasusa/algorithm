/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res = [];
    let valueMap = new Map();
    for(let i = 0 ; i < nums.length; i++) {
        if(valueMap.has(target - nums[i])){
            res[1] = i;
            res[0] = valueMap.get(target - nums[i])
            return res;
        }else {
            valueMap.set(nums[i] ,i)
        }
    }
    return res;
};
