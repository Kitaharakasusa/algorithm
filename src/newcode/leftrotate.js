function LeftRotateString(str, n) {
    // write code here
    let len = str.length;
    if(len === 0 || str === null) return "";
    n = n % str.length;
    
    return str.slice(n) + str.slice(0,n);
}
let s = 'abcXYZdef';

console.log(LeftRotateString(s, 3));
