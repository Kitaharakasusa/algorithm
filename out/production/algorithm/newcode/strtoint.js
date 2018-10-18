/**
 * @param  {String} str
 */
function StrToInt(str)
{
    // write code here
    let n = str.length;
    let s = 1;
    let res = 0;
    if(!n) return 0;
    if(str[0] == '-') s = -1;
    for(let i = (str[0] === '-' || str[0] === '+')? 1:0; i<n; i++) {
        if(!('0' <= str[i] && str[i] <= '9')) return 0;
        res = (res << 1) + (res<<3) + (str[i]-'0');
    }
    return res *s ;
}

console.log(StrToInt('+a2147483647'));
