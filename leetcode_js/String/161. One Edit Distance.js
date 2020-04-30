/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    if(s === t || Math.abs(s.length - t.length > 1) )return false;
    let i = 0;
    let j = 0;
    let isEdited = false;

    while(i < s.length && j < t.length) {
        if(s[i] === t[j]){
            i++;
            j++;
        }else if(isEdited) {
            return false;
        }else if(s.length < t.length) {
            j++;
            isEdited = true;
        }else if(s.length > t.length) {
            i++;
            isEdited = true;
        }else {
            i++;
            j++;
            isEdited = true;
        }
    }
    return true;
};