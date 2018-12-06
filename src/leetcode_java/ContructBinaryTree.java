package leetcode_java;

/**
 * Create by Kitahara on 2018/11/19 20:30
 * email kitaharakasusa@gmail.com
 */
public class ContructBinaryTree {
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        return construct(preorder, inorder, 0, preorder.length-1, 0, inorder.length-1);
    }
    public TreeNode construct(int[] preorder, int [] inorder,int lp, int rp, int li, int ri) {
        if (lp > rp) return  null;

        TreeNode root = new TreeNode(preorder[lp]);
        for (int k = li; k <= ri; k++) {
            if (preorder[lp] == inorder[k]){
                root.left = construct(preorder, inorder, lp +1, lp +(k-li), li, k-1 );
                root.right = construct(preorder, inorder, lp+(k-li)+1, rp, k+1, ri);
            }
        }
        return  root;
    }
}
