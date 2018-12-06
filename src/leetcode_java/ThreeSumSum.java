package leetcode_java;

import java.util.ArrayList;

import java.util.Arrays;
import java.util.List;

/**
 * Create by Kitahara on 2018/10/16 11:56
 * email kitaharakasusa@gmail.com
 */
public class ThreeSumSum {
    public List<List<Integer>> threeSum(int[] nums) {
//        List<List<Integer>> res  = new ArrayList<List<Integer>>();
//        if(nums == null  || nums.length < 3) return res;
//        Arrays.sort(nums);
//        for(int i = 0 ; i < nums.length; i++) {
//            if(i != 0 && nums[i] == nums[i-1]) continue;
//            int target = -nums[i];
//            int left = i +1;
//            int right = nums.length - 1;
//            while (left <right) {
//                if (nums[left] + nums[right] < target) {
//                    left++;
//                }else if (nums[left] + nums[right] > target){
//                    right--;
//                }else  {
//                    res.add(Arrays.asList(nums[i], nums[left] ,nums[right]));
//                    while (left < right && nums[left] == nums[left + 1]) {
//                        left++;
//                    }
//                    while (left < right && nums[right] == nums[right-1]) {
//                        right--;
//                    }
//                    left++;
//                    right--;
//                }
//            }
//        }
//        return res;
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        if (nums == null || nums.length < 3) return res;
        Arrays.sort(nums);
        for (int i = 0; i < nums.length; i++) {
            if (i != 0 && nums[i] == nums[i - 1]) continue; // skip duplicates
            int target = -nums[i];
            int left = i + 1;
            int right = nums.length - 1;
            while (left < right) {
                if (nums[left] + nums[right] < target) {
                    left++;
                } else if (nums[left] + nums[right] > target){
                    right--;
                } else {
                    res.add(Arrays.asList( nums[i],nums[left], nums[right]));

                    while(left < right && nums[left] == nums[left + 1]) { // skip duplicates
                        left++;
                    }
                    while(left < right && nums[right] == nums[right - 1]) { // skip duplicates
                        right--;
                    }
                    left++;
                    right--;
                }
            }
        }
        return res;
    }
    public static void main(String args[]) {
//        ThreeSumSum threeSum = new ThreeSumSum();
//        int data[] = {-1, 0, 1, 2, -1, -4};
//        List<List<Integer>>res = threeSum.threeSum(data);
//        for(int i  = 0; i < res.size(); i++) {
//            for(int j = 0;j <res.get(i).size(); j++) {
//                System.out.print(res.get(i).get(j)+ " ");
//            }
//            System.out.print('\n');
//
//        }
        String s = "abcdefg";
        System.out.print(s.substring(1,2));
    }
}
