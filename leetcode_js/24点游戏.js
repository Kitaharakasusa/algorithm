/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function(nums) {
  const len = nums.length;
  if(len === 1){
    const diff = nums[0] - 24;
    return Math.abs(diff) < 0.00001;
  }
  for(let i = 0; i < len; i++){
    for(let j = i+1; j < len; j++){
      const copyNums = nums.slice();
      copyNums.splice(j, 1);
      copyNums.splice(i, 1);
      let n1 = nums[i];
      let n2 = nums[j];

      let isValid = false;

      isValid = isValid || judgePoint24(copyNums.concat(n1 + n2));

      isValid = isValid || judgePoint24(copyNums.concat(n1 - n2));
      isValid = isValid || judgePoint24(copyNums.concat(n2 - n1));

      isValid = isValid || judgePoint24(copyNums.concat(n1 * n2));

      if(n2 !== 0) {
        isValid = isValid || judgePoint24(copyNums.concat(n1 / n2));
      }
      if(n1 !== 0){
        isValid = isValid || judgePoint24(copyNums.concat(n2 /  n1));
      }
      if(isValid) return true;

    }
  }
  return false;
};