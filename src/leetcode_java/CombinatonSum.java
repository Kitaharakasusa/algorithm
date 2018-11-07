package leetcode_java;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Create by Kitahara on 2018/11/1 20:13
 * email kitaharakasusa@gmail.com
 */
public class CombinatonSum {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
       List<List<Integer>> res = new ArrayList<>();
        Arrays.sort(candidates);
        backtrack(res,new ArrayList<>(), candidates, 0, target);
        return res;
    }
    private void backtrack(List<List<Integer>>res,List<Integer>templist,int[] candidates, int start, int remain) {
        if(remain < 0) return;
        else if(remain == 0) res.add(new ArrayList<>(templist));
        else {
            for (int i = start; i < candidates.length; i++) {
                templist.add(candidates[i]);
                backtrack(res, templist, candidates,i,remain-candidates[i] );
                templist.remove(templist.size()-1);
            }
        }
    }
}
