package leetcode_java;

/**
 * Create by Kitahara on 2018/10/23 17:06
 * email kitaharakasusa@gmail.com
 */
public class FindFirst {
    public int[] searchRange(int[] nums, int target) {
         int begin = 0;
         int end = nums.length -1;
         int mid = (begin + end) /2;
         while(begin <= end) {
             if (nums[mid] ==target){
                 int i = mid;
                 int j = mid;
                 while(i>0 &&nums[i-1] ==target) i--;
                 while(j<nums.length-1&&nums[j+1] ==target) j++;
                 int res[] = {i,j};
                 return res;
             }else if(target > nums[mid]) {
                 begin = mid +1;
                 mid = (begin+end)/2;
             }else if(target <nums[mid]) {
                 end = mid -1;
                 mid = (begin+end )/2;
             }
         }
         return new int[]{-1,-1};
    }
}
