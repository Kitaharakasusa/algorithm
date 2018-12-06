package leetcode_java;

/**
 * Create by Kitahara on 2018/11/30 23:47
 * email kitaharakasusa@gmail.com
 */
public class FlattenBinaryTree {
    public void flatten(TreeNode root) {
//        if (root == null) return;
//        if (root.left !=null) flatten(root.left);
//        if (root.right != null) flatten(root.right);
//        TreeNode tmp = root.right;
//        root.right = root.left;
//        root.left = null;
//        while (root.right != null) root = root.right;
//        root.right = tmp;
        TreeNode cur = root;
        while (cur != null) {
            if (cur.left != null) {
                TreeNode p = cur.left;
                while(p.right != null) p = p.right;
                p.right = cur.right;
                cur.right = cur.left;
                cur.left = null;
            }
            cur = cur.right;
        }
    }
}
