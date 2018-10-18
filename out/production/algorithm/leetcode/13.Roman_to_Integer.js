/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let valueMap = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000,
        };
    let sum = valueMap[s.charAt(s.length-1)];
    for(let i = s.length-2; i >= 0; i --) {
        if(valueMap[s[i]] < valueMap[s[i+1]]) {
            sum -= valueMap[s[i]];
        }else {
            sum += valueMap[s[i]];
        }
    }
    return sum;
};

console.log(romanToInt('IV'))