/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let record = {};
    for(let i = 0; i < s.length; i++) {
        if(record.hasOwnProperty(s[i])) {
            record[s[i]] += 1;
        }
        else {
            record[s[i]] = 1;
        }
    }
    
    for(let i = 0; i < s.length; i++) {
        if (record[s[i]] === 1) {
            return i;
        }
    }
    
    return -1;
};

firstUniqChar('loveleetcode');