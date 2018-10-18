/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    for(let i = 1; i <= s.length/2; i ++) {
       let nowsub = s.substring(0,i);
       if(s.length % i === 0) {
           let res = '';
           for(let j = 0 ; j <s.length / i; j++) {
               res += nowsub;
           }
           if(res === s) return true;
       }
    }
    return false;
};
repeatedSubstringPattern('abab')