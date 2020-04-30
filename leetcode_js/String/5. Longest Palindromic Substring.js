/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length === 0) return '';
    let n = s.length, left = 0, len = 1;

    
    for(let i = 0; i < n; i++){
        dp[i][i] = true
        console.log(dp)
        for(let j = 0; j < i; j++){
            dp[j][i] = s[i]===s[j] && (i - j < 2 || dp[j+1][i-1])
            if(dp[j][i] && len < i - j+1){
                len = i - j + 1;
                left = j;
            }
        }       
    }
    return s.substr(left, len);
};

console.log(longestPalindrome('babad'))