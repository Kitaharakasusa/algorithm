
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
   if(nums.length ===0 || nums === null) return null;
   let head = arrToBST(nums,0, nums.length-1);
   return head;
};

/**
 *
 * @param {number[]}nums
 * @param {number}begin
 * @param {number}end
 */
function arrToBST(nums, begin, end) {
    if(begin > end) return null;
    let mid  = Math.floor((begin + end)/2);
    let root =  new TreeNode(nums[mid]);
    root.left = arrToBST(nums,0,mid -1);
    root.right = arrToBST(nums,mid+1,end);
    return root;
}