/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let arr = new Array(26).fill(0);
    for(let i = 0; i < magazine.length; i++) {
        arr[magazine.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    console.log(arr);
    for(let i = 0; i < ransomNote.length; i++) {
        if(--arr[ransomNote.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)] < 0) {
            return false;
        }
    }
    return true;
};

canConstruct("aa", "aab");