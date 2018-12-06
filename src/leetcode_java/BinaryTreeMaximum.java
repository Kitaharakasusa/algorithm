package leetcode_java;

/**
 * Create by Kitahara on 2018/12/1 21:23
 * email kitaharakasusa@gmail.com
 */
public class BinaryTreeMaximum {
    int res;
    public int maxPathSum(TreeNode root) {
            res = Integer.MIN_VALUE;
            helper(root);
            return res;
    }
    int helper(TreeNode node) {
        if (node == null) return 0;
        int left = Math.max(helper(node.left), 0);
        int right = Math.max(helper(node.right), 0);
        res = Math.max(res, left + right + node.val);
        return Math.max(left, right) + node.val;
    }
}
