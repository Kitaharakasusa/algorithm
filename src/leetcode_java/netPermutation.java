package leetcode_java;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;

/**
 * Create by Kitahara on 2018/10/23 15:20
 * email kitaharakasusa@gmail.com
 */
public class netPermutation {
    public void nextPermutation(int[] nums) {
        int index = nums.length - 1;
        while( index > 0 && nums[index] <= nums[index-1]) {
            --index;
        }
        if(index == 0) {
            Arrays.sort(nums);
            return;
        }
        int second = Integer.MAX_VALUE,seconIndex = Integer.MAX_VALUE;
        for(int i = nums.length - 1; i > index -1; --i) {
            if(nums[i] > nums[index -1] && nums[i] < second) {
                second  = nums [i];
                seconIndex = i;
            }
        }
        int tmp = nums[index -1];
        nums[index - 1] = nums[seconIndex];
        nums[seconIndex] = tmp;
        Arrays.sort(nums,index,nums.length);
    }
}
