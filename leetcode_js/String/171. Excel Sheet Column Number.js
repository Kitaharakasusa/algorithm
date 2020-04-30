/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    res = 0;
    for(let i = 0; i<s.length;i++){
        res = res * 26 + (s.charCodeAt(i) - 65 + 1);
    }
    return res;
};

function F() {}
function O() {}

console.log(F.prototype.__proto__)
let a  = new Object();
console.log(a.__proto__)