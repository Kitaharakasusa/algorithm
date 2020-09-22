/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    let dp =  new Array(t.length + 1);
    for(let i = 0; i < t.length+1; i++){
        dp[i] =  new Array(s.length+1).fill(0);
    }
    for(let j = 0; j < s.length+1; j++){
        dp[0][j] = 1;
    }
    for(let i = 1; i < t.length + 1; i++){
        for(let j = 1; j < s.length+1; j++){
            dp[i][j] = dp[i][j-1] + (t[i-1] === s[j - 1]?dp[i-1][j-1]:0);
        }
    }
    return dp[t.length][s.length];
};