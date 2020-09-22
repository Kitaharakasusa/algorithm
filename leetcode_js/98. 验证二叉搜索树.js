/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  let stack = [];
  let inorder = -Infinity;

  while(stack.length || root!==null){
    while(root !== null){
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if(root.val <= inorder) return false;
    inorder = root.val;
    root = root.right;
  }
  return true;
};