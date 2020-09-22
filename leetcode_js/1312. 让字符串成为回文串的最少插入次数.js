/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
  const LEN = s.length;
  const dp = [];
  for(let i = 0; i < LEN; i++){
    dp[i] = new Uint16Array(LEN);
  }
  for(let span = 2; span <=LEN ; span++){
    for(let i = 0; i <= LEN - span; i++){
      let j = i + span - 1;
      dp[i][j] = Math.min(dp[i+1][j], dp[i][j-1]) + 1;
      if(s[i] == s[j]){
        dp[i][j] = Math.min(dp[i][j], dp[i + 1][j - 1]);
      }
    }
  }
  return dp[0][LEN - 1];
};