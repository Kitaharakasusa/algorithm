/**
 * @param {string} s
 * @return {string[]}
 */
var generatePossibleNextMoves = function(s) {
    let ans = new Array();
    let arr = s.split("");
    for(let i = 0; i < s.length-1; i++) {
        if(arr[i] == "+" && arr[i+1] == "+"){
            arr[i] ="-";
            arr[i+1] ='-';
            ans.push(arr.toString().replace(/,/g, ''));
            arr[i] = "+";
            arr[i+1] ="+";
        }
    }
    return ans;
};