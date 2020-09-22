/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  let n = dungeon.length, m = dungeon[0].length;
  let dp = new Array(n + 1);
  for(let i = 0; i <= n; i++){
    dp[i] = new Array(m+1).fill(Number.MAX_SAFE_INTEGER);
  }
  dp[n][m-1] = dp[n-1][m] = 1;
  for(let i = n - 1; i>=0; i--){
    for(let j = m - 1; j>=0; j--){
      let minn = Math.min(dp[i+1][j], dp[i][j+1]);
      dp[i][j] = Math.max(minn -  dungeon[i][j], 1);
    }
  }
  return dp[0][0];
};