package leetcode_java;

/**
 * Create by Kitahara on 2018/11/19 15:10
 * email kitaharakasusa@gmail.com
 */

 class TreeNode {
      int val;
      TreeNode left;
      TreeNode right;
     TreeNode(int x) { val = x; }
 }
public class SymmetircTree {
    public boolean isSymmetric(TreeNode root) {
        if (root == null) return true;
        return judge(root.left, root.right);

    }
    public boolean judge(TreeNode left, TreeNode right) {
        if (left == null && right == null)return true;
        if (left!=null && right == null || left == null &&right!=null || left.val != right.val) return false;
        return judge(left.left, right.right) && judge(left.right, right.left);
    }
}
