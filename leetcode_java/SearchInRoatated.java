package leetcode_java;

/**
 * Create by Kitahara on 2018/10/23 16:01
 * email kitaharakasusa@gmail.com
 */
public class SearchInRoatated {
    public int search(int[] nums, int target) {
      int high = nums.length -1;
      int mid = 0 ;
      int low = 0;
      while(low <= high) {
          mid = (low + high) /2;
          if(nums[mid] == target) return mid;
          if(nums[low] <= nums[mid]){
              if(nums[low] <= target && target <= nums[mid])
                  high = mid -1;
              else low = mid +1;
          }else {
              if(nums[mid] <= target && target <= nums[high])
                  low =  mid+1;
              else
                  high = mid -1;
          }
      }
      return -1;
    }
}
