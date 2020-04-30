/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    let res = 0, n = s.length;
    for(let cnt = 1; cnt <= 26; cnt++){
        let start = 0, i = 0, uniqueCnt =0;
        let charCnt = new Array(26).fill(0);
        while(i < n) {
            let valid = true;
            if(charCnt[s[i++].charCodeAt(0) - 'a'.charCodeAt(0)]++ === 0) uniqueCnt++;
            while(uniqueCnt > cnt) {
                if(--charCnt[s[start++].charCodeAt(0) -'a'.charCodeAt(0)] === 0){
                    --uniqueCnt;
                }
            }
            for(let j = 0; j < 26; j++) {
                if(charCnt[j] > 0 && charCnt[j] < k) valid = false;
            
            }
            if(valid) res = Math.max(res, i - start);

        }
    }
    return res
};

console.log(longestSubstring("aaabb",3))