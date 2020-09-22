/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
  let left = 0, right = 0;
  for(let i = 0; i < nums.length; i++){
    right+=nums[i];
    if(left < nums[i]){
      left = nums[i];
    }
  }
  while(left < right){
    let mid = (left + right) >>> 1;
    if(check(nums, mid, m)){
      right = mid;
    }else{
      left = mid + 1;
    }
  }
  return left;
};

let check = function(nums, x, m){
  let sum = 0;
  let cnt = 1;
  for(let i = 0; i < nums.length; i++){
    if(sum + nums[i] >x){
      cnt++;
      sum = nums[i];
    }else{
      sum += nums[i];
    }
  }
  return cnt <=m;
}