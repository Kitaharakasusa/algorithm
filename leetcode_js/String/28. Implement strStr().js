/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length > haystack) return -1;
    if (needle === haystack) return 0;
    for(let i = 0; i < haystack.length; i++) {
        for(let j=0; ; j++) {
            if(j === needle.length) return i;
            if (i+j === haystack.length) return -1;
            if(needle[j] !== haystack[i+j]) break;
        }
    }
    return -1;
};