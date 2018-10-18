package leetcode_java;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Create by Kitahara on 2018/10/16 17:46
 * email kitaharakasusa@gmail.com
 */
public class FourSum {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        Arrays.sort(nums);
        int realTarget;
        for(int i = 0; i < nums.length-3; i++) {
            for(int j = i + 1;j < nums.length-2;j++) {
                realTarget = target- (nums[i] + nums[j]);
                int left = j + 1;
                int right = nums.length - 1;
                while (left < right) {
                    if (nums[left] + nums[right] > realTarget){
                        right--;
                        continue;
                    }
                    if(realTarget == nums[left] + nums[right]){
                        res.add(Arrays.asList( nums[i], nums[j], nums[left], nums[right]));
                    }
                    left++;
                    while(nums[left] == nums[left - 1] && left < right) {
                        left++;
                    }
                }
                while (nums[j] == nums[j+1] && j < nums.length -2) {
                    j++;
                }
            }while (nums[i] == nums[i+1] && i < nums.length - 3) {
                i++;
            }

        }
        return res;
    }
}
