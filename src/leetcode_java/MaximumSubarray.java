package leetcode_java;

/**
 * Create by Kitahara on 2018/11/2 22:37
 * email kitaharakasusa@gmail.com
 */
public class MaximumSubarray {
    public int maxSubArray(int[] nums) {
       int max = nums[0];
       int sum = nums[0];

       for(int i = 1; i < nums.length; i++) {
           if (sum + nums[i] < nums[i]) sum = nums[i];
           else sum = sum + nums[i];
           if (sum > max) max = sum;
       }
       return max;
    }
}
