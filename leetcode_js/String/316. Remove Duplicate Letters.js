/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let cnt = new Array(26).fill(0);
    let pos = 0;
    for(let i = 0; i < s.length; i++) cnt[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    for(let i = 0; i < s.length; i++) {
        if(s.charCodeAt(i) < s.charCodeAt(pos)) pos = i;
        if(--cnt[s.charCodeAt(i) - 'a'.charCodeAt(0)] === 0) break;
    }
    let reg = "/" + s.charAt(pos) +"/g"
    return s.length === 0 ? "" :s.charAt(pos) + removeDuplicateLetters(s.substring(pos + 1).replace(eval(reg), ''))
};