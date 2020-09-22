/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    if(s.length === 0) return 0;
    let n = s.length;
    let p = new Array(n)
    for(let i = 0; i < n; i++){
        p[i] = new Array(n).fill(false);
    }
    let dp = new Array(n)
    for(let i = 0; i < n; i++){
        dp[i] = i;
        for(let j = 0; j <=i; j++) {
            if(s[i] === s[j] && (i - j < 2 || p[j+1][i-1])){
                p[j][i] = true;
                dp[i] = (j === 0)? 0:Math.min(dp[i], dp[j-1]+1);
            }
        }
    }
    return dp[n-1];
};