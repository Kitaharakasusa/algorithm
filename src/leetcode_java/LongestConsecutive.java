package leetcode_java;

import java.util.HashSet;
import java.util.Set;

/**
 * Create by Kitahara on 2018/12/4 23:37
 * email kitaharakasusa@gmail.com
 */
public class LongestConsecutive {
    public int longestConsecutive(int[] nums) {
        int res = 0;
        Set<Integer> s = new HashSet<>();
        for (int num : nums) s.add(num);
        for (int num: nums) {
            if (s.remove(num)) {
               int pre = num - 1, next = num + 1;
               while (s.remove(pre)) --pre;
               while (s.remove(next)) ++next;
               res = Math.max(res, next- pre - 1);
            }
        }
        return res;

    }
}
