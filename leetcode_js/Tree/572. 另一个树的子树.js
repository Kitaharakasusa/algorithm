/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    if(!s)return false;
    if(isSame(s,t)) return true;
    return isSubtree(s.left, t) || isSubtree(s.right,t);
};

function isSame(s, t){
    if(!s && !t) return true;
    if(!s||!t) return false;
    if(s.val !== t.val) return false;
    return isSame(s.left , t.left) && isSame(s.right, t.right);
}