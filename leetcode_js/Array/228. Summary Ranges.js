/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let list = new Array();
    if(nums.length === 1) {
        list.push(nums[0] + "");
        return list;
    }
    for(let i = 0; i < nums.length; i++) {
        let a = nums[i];
        while(i+1 < nums.length && (nums[i+1] - nums[i] === 1)){
            i++;
        }
        if(a !== nums[i]){
            list.push(a+"->"+nums[i]);
        }else {
            list.push(a+"");
        }
    }
    return list;
};