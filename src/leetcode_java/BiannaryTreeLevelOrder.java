package leetcode_java;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

/**
 * Create by Kitahara on 2018/11/19 15:44
 * email kitaharakasusa@gmail.com
 */
public class BiannaryTreeLevelOrder {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>>res = new ArrayList<>();
        if (root == null) return res;
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);
        while(!q.isEmpty()) {
            //记录每层
            List<Integer> vec = new ArrayList<>();
            int size = q.size();
            for (int i = 0; i < size; i++){
                TreeNode a = q.poll();
                vec.add(a.val);
                if (a.left!= null) q.offer(a.left);
                if (a.right !=null) q.offer(a.right);
            }
            res.add(vec);
        }

        return res;
    }
}
