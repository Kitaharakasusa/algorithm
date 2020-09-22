/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  let prevNode = new TreeNode(-Infinity);
  let firstError;
  let secondeError;
  let inOrder = function(root) {
    if(root == null) return;
    inOrder(root.left);
    if(prevNode.val >= root.val && firstError == null){
      firstError = prevNode;
    }
    if(prevNode.val >= root.val && firstError != null){
      secondeError = root;
    }
    prevNode = root;
    inOrder(root.right);
  }
  inOrder(root);
  const temp = firstError.val;
  firstError.val = secondeError.val;
  secondeError.val = temp;
};