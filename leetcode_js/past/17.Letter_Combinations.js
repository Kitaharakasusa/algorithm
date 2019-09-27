/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let valueMap = {
        '2':'abc',
        '3':'edf',
        '4':'ghi',
        '5':'jkl',
        '6':'mno',
        '7':'pqrs',
        '8':'tuv',
        '9':'wxyz',
    };
    let letter = digits.split('');
    let res = [];
    if(letter.length ===0 ) return res;
    res.push("");
    for(let i  = 0 ;i < letter.length; i++) {
         let tmp = [];
         let chars = valueMap[letter[i]];
         for (const r of res) {
            for (const char of chars) {
                tmp.push(r+char)
            }
         }
         res = tmp;
    }
    return res;
    
};
let res = letterCombinations('234');
console.log(res);