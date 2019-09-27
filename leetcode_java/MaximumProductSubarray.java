package leetcode_java;

import java.util.Map;

/**
 * Create by Kitahara on 2018/12/6 20:49
 * email kitaharakasusa@gmail.com
 */
public class MaximumProductSubarray {
    public int maxProduct(int[] nums) {
//        int res = nums[0], n = nums.length;
////        int []f = new int[n], g = new int[n];
////        f[0] = nums[0];
////        g[0] = nums[0];
//
//        for (int i = 1; i<n; i++){
//            if (nums[i] > 0) {
//
//            }
////            f[i] = Math.max(Math.max(f[i -1] *nums[i], g[i-1]* nums[i]), nums[i]);
////            g[i] = Math.min(Math.min(f[i -1] *nums[i], g[i-1]* nums[i]), nums[i]);
////            res = Math.max(res, f[i]);
//        }
//        return res;
        int res = nums[0], mx =res, mn = res;
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > 0) {
                mx = Math.max(mx * nums[i], nums[i]);
                mn = Math.min(mn * nums[i], nums[i]);
            }else {
                int t = mx;
                mx = Math.max(mn * nums[i], nums[i]);
                mn = Math.min(t *nums[i], nums[i]);
            }
            res = Math.max(res, mx);
        }
        return res;
    }
}
