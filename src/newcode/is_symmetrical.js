 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
/**
 * @param  {TreeNode} pRoot
 */
function isSymmetrical(pRoot)
{
    // write code here
    if(pRoot == null) {
        return true;
    }
    return comRoot(pRoot.left, pRoot.right);
}
/**
 * @param  {TreeNode} left
 * @param  {TreeNode} right
 */
function comRoot(left, right) {
    if(left == null) return right == null;
    if(right == null) return false;
    if(left.val != right.val) return false;
    return comRoot(left.right, right.left)&&comRoot(left.left, right.right);
}