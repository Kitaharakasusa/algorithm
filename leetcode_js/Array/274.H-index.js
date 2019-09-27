/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a, b) => {
        return a - b;
    });
     console.log(citations);
     let level = 0;
     for (let i = 0; i < citations.length; i++) {
         level = Math.max(level, Math.min(citations.length - i, citations[i]))
     }
     return level;
};

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndexAnathor = function(citations) {
    let n = citations.length;
    let count = new Array(n + 1).fill(0);
    for(let i = 0; i < citations.length; i++) {
        let c = citations[i];
        if(c >= n) count[n]++;
        else count[c]++;
    }
    for(let i = n ; i > 0 ; i--) {
        if(count[i] >= i) return i;
        count[i-1] += count[i];
    }
    return 0;
};

let testSample = [6,6,4,8,4,3,3,10];
console.log(hIndexAnathor(testSample));