/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
  let allNum = [];
  let map = [];
  for(let i =0; i < nums.length; i++){
    map[i] = 0;
    for(let j =0; j < nums[i].length; j++){
      allNum.push({
        num:nums[i][j],
        type: i
      })
    }
  }
  allNum.sort((a, b)=> a.num - b.num);
  let left = 0; 
  let count = 0;
  let minLen = Infinity;
  let minStart = 0;
  for(let right = 0; right < allNum.length; right++){
    if(map[allNum[right].type] === 0) count++;
    map[allNum[right].type]++;
    while(count === nums.length && left<=right){
      if(allNum[right].num - allNum[left].num < minLen){
        minLen = allNum[right].num - allNum[left].num;
        minStart = allNum[left].num;
      }
      map[allNum[left].type]--;
      if(map[allNum[left].type] ===0) count--;
      left++;
    }
  }
  return [minStart, minStart + minLen];


};