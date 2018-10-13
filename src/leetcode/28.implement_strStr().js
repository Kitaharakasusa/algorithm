/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length > haystack.length) return -1;
    if(needle.length == 0) return 0;
    let over = haystack.length - needle.length;
    for(let i = 0 ; i<=over; i++) {
        if(haystack.substring(i, i+needle.length)=== needle) {
            return i;
        }
    }
    return -1;
};