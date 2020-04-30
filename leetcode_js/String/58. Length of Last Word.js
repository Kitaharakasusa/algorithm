/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(!s) return 0;
    s = s.split(' ').filter(a=>a.trim());
    if(s.length === 0) return 0;
    return s[s.length-1].length;
};