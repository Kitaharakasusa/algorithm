/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
   let res = [];
   let cur = [];
   backtrack(nums, res, cur);
   return res;
};

/**
 *
 * @param {Array} nums
 * @param {Array}res
 * @param {Array}cur
 */
function  backtrack(nums, res, cur) {
    if(cur.length === nums.length) res.push([].concat(cur));
    else {
        for (let i = 0; i< nums.length;i++) {
            if(cur.indexOf(nums[i])!== -1) continue;
            cur.push(nums[i]);
            backtrack(nums,res,cur);
            cur.pop();
        }
    }

}
console.log('2222');
let a =permute([1,2,3]);
console.log(a);