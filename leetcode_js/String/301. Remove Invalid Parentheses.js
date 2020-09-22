/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    let res = []
    helper(s,0,0, ['(', ')'],res);
    return res;
};

let helper = function(s, last_i, last_j, p, res){
    let cnt = 0;
    for(let i = last_i; i < s.length; i++){
        if(s[i] === p[0]) ++cnt;
        else if(s[i] === p[1]) --cnt;
        if(cnt >= 0) continue;
        for(let j = last_j; j <= i; j++){
            if(s[j] ===p[1] && (j === last_j || s[j] !== s[j-1])){
                helper(s.substr(0,j) + s.substr(j+1), i, j, p, res);
            }
        }
        return;
    }
    let rev = s.split('').reverse().join('');
    if(p[0] === '(') helper(rev, 0, 0, [')', '('],res);
    else res.push(rev);
}