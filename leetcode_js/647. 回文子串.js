/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let num = 0, n = s.length;
  for(let i = 0; i < n; i++){//遍历回文中心点
    for(let j = 0; j <= 1; j++){//j = 0是一个点， j = 1中心是两个点
      let l  = i; 
      let r = i + j;
      while(l >= 0 && r < n && s[l--] == s[r++]) num++;
    }
  }
  return num
};

const buildSubstr = function(s){
  let count = 0; 
  const len = s.length;
  const dp = new Array(len);
  for(let i = 0; i < len; i++){
    dp[i] = new Array(len).fill(false);
  }

  for(let j = 0; j < len; j++){
    for(let i = 0; i <= j; i++){
      if(i == j){
        dp[i][j] = true
        count++;
      }else if(j - i == 1 && s[i] === s[j]){
        dp[i][j] = true;
        count++;
      }else if(j - i > 1 && s[i] == s[j] && dp[i+1][j+1]){
        dp[i][j] = true;
        count++;
      }
    }
  }
  return count;


}