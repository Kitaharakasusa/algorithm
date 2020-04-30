/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    let n = s.length, i = 0;
    for(let j = n-1; j >=0; j--){
        if(s[i] === s[j])i++
    }

    if(i==n)return s;
    let rem = s.substr(i);
    rem = rem.split('').reverse().join('');
    return rem + shortestPalindrome(s.substr(0,i)) + s.substr(i) 
};

console.log(shortestPalindrome('abbac'));
