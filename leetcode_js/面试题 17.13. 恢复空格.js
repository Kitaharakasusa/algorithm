/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function(dictionary, sentence) {
  const len = sentence.length;
  const dp = new Array(len+1);
  const wordDict = new Set();
  for(const word of dictionary){
    wordDict.add(word)
  }
  dp[0] = 0;
  for(let i = 1; i <=len; i++){
    dp[i] = dp[i - 1] + 1;
    for(let j = i - 1; j >= 0; j--){
      const word = sentence.substring(j, i);
      if(wordDict.has(word)){
        dp[i] = Math.min(dp[i], dp[j]);
      }else {
        dp[i] = Math.min(dp[i], dp[j] + i - j);
      }
    }
  }
  return dp[len];
};