package leetcode_java;

/**
 * Create by Kitahara on 2018/11/2 23:47
 * email kitaharakasusa@gmail.com
 */
public class JumpGame {
    public boolean canJump(int[] nums) {
      int reach = nums[0];
      for(int i = 1; i < nums.length && reach>= i; i++)
          if(i + nums[i] > reach) reach = i + nums[i];
      return reach >= nums.length-1;
    }
}
