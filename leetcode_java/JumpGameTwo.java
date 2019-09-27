package leetcode_java;

/**
 * Create by Kitahara on 2018/11/4 14:24
 * email kitaharakasusa@gmail.com
 */
public class JumpGameTwo {
    public int jump(int[] nums) {
          int jumps =0, curEnd = 0, curFarthest = 0;
          for (int i = 0; i < nums.length-1; i++){
              curFarthest = Math.max(curFarthest, i + nums[i]);
              if(i == curEnd) {
                  jumps++;
                  curEnd = curFarthest;
              }
          }
          return jumps;
    }
}
