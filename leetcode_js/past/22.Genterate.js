/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    geneerate(res, "", 0, 0, n)
    return res;
};
/**
 * @param  {string[]} res
 * @param  {string} str
 * @param  {number} open
 * @param  {number} close
 * @param  {number} max
 */
function geneerate(res, str, open, close, max) {
    if(str.length == max * 2) {
        res.push(str);
        return;
    }
    if(open < max) {
        geneerate(res, str + "(", open+1, close, max);
    }
    if(close < open) {
        geneerate(res, str+")",  open, close+1, max);
    }
}