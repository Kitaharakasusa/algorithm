/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if(nums.length < 2) return 0;
    maxValue = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i]>maxValue) maxValue = nums[i];
    }
    let res = bucketSorted(nums, maxValue);
    let maxDefference = 0;
    for (let i = 0; i < res.length - 1; i++) {
        if(res[i+1] - res[i] > maxDefference) {
            maxDefference = res[i+1] - res[i];
        }
    }
};

let bucketSorted = function(nums, maxValue){
    let n = nums.length;
    let sortedArray = new Array(nums.length).fill(new Array());
    for(let i = 0; i < nums.length; i++) {
        let index = Math.floor((nums[i] * n) / (maxValue + 1));
        sortedArray[index] = [...sortedArray[index], nums[i]].sort((a, b)=> a - b)
    }
    
    let lastRes = [];
    for(let j = 0; j < sortedArray.length; j++) {
        for(let k = 0; k < sortedArray[j].length; k++) {
            lastRes = [...lastRes,sortedArray[j][k]];
        }
    }

    return lastRes;
}

let nums = [3,2,10,5,9,7];
maximumGap(nums);