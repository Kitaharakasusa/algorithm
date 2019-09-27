/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort();
    let ans = new Array();
    let cur = [];
    backtracing(ans,cur,0,target,candidates);
    return ans;
};

/**
 *
 * @param {Array}ans
 * @param {Array}cur
 * @param {number}last_use
 * @param {number}rest_target
 * @param {Array}candidates
 */
function backtracing(ans, cur, last_use, rest_target,candidates) {
    if(rest_target === 0) {
        ans.push([].concat(cur));
    }
    for (let i = last_use; i<candidates.length && candidates[i]<=rest_target;i++) {
        cur.push(candidates[i]);
        backtracing(ans,cur,i,rest_target-candidates[i],candidates);
        cur.pop();
    }
}