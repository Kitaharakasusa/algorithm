/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    let div = 1;
    while(Math.floor(x / div) >= 10) div *=10;
    while(x > 0){
        let left = Math.floor(x / div);
        let right = x % 10;
        if(left !== right) return false;
        x = Math.floor( (x % div) / 10);
        div /= 100;
    }
    return true;

};
console.log(isPalindrome(10));