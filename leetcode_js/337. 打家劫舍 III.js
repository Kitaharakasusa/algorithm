/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
  const dp = new Map();
  const helper = (root) => {
    if(root === null) return [0,0];
    const left = helper(root.left);
    const right = helper(root.right);
    if(!dp.has(root)){
      dp.set(root,[0,0]);
    }
    const res = dp.get(root);
    res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    res[1] = root.val + left[0] + right[0];
    return res;
  }
  const res = helper(root);
  return Math.max(res[0],res[1]);
};