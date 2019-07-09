/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if(nums === null || nums.length ===0) return null;
    let firstindex = 0;
    let secondindex = 0;
    let find = false;
     for(let i = nums.length-1; i >0; i--) {
         if(nums[i] > nums[i-1]) {
             firstindex = i -1;
             find = true;
             let min = nums[i];
             for(let j = i; j <nums.length;j++) {
                 if(min >= nums[j]) {
                     min = nums[j];
                     secondindex = j;
                 }
             }
             let temp = nums[firstindex];
             nums[firstindex] = nums[secondindex];
             nums[secondindex] = temp;
             let head =  nums.slice(0,firstindex+1);
             console.log(head);
             let dummy =  nums.slice(firstindex+1).sort();
             console.log(dummy);
             nums = head.concat(dummy);
             console.log(nums);
         }
     }
     if(!find){
         nums.sort();
     }
};
nextPermutation([1,3,2]);