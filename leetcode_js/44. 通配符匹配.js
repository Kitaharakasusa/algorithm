/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const Slen = s.length;
  const pLen = p.length;
  const dp = new Array(Slen+1);
  for(let i = 0; i < Slen + 1; i++){
    dp[i] = new Array(pLen+1).fill(false);
  }
  dp[0][0] = true;
  for(let j = 1; j <=pLen; j++){
    dp[0][j] = p[j-1] =='*' && dp[0][j-1];
  }

  for(let i = 1; i <= Slen; i++){
    for(let j = 1; j <=pLen; j++){
      if(p[j-1]=='?' || s[i-1] == p[j - 1]){
        dp[i][j] = dp[i-1][j-1];
      }else if(p[j-1] == '*' && (dp[i-1][j] || dp[i][j - 1])){
        dp[i][j] = true;
      }
    }
  }
  return dp[Slen][pLen]
};
