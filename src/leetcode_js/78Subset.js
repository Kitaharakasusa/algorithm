/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let res= [];
  let cur = [];
  nums.sort();
  backtrack(res,nums,0,cur);
  return res;
};


/**
 *
 * @param {Array}res
 * @param {Array}nums
 * @param {number}start
 * @param {Array}cur
 */
function backtrack(res,nums,start,cur) {
    res.push([].concat(cur));
    for(let i = start; i<nums.length;i++) {
        cur.push(nums[i]);
        backtrack(res,nums,i+1,cur);
        cur.pop();
    }
}