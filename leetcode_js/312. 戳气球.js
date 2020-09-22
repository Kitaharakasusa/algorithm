/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
  let n = nums.length;
  let rec = new Array(n+2);
  for(let i = 0; i <n+2; i++){
    rec[i] =  new Array(n+2).fill(0);
  }
  let val = new Array(n+2).fill(0);
  val[0] = val[n+1] = 1;
  for(let i = 1; i <=n; i++){
    val[i] =nums[i-1];
  }

  for(let i = n - 1; i>=0; i--){
    for(let j = i+2; j<=n+1; j++){
      for(let k = i+1; k < j; k++){
        let sum = val[i] * val[k] * val[j];
        sum += rec[i][k] + rec[k][j];
        rec[i][j] = Math.max(rec[i][j], sum);
      }
    }
  }
  return rec[0][n+1];
};