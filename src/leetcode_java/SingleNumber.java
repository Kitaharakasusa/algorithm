package leetcode_java;

import java.util.HashMap;
import java.util.Map;

/**
 * Create by Kitahara on 2018/12/4 23:50
 * email kitaharakasusa@gmail.com
 */
public class SingleNumber {
    public int singNumber(int [] nums){
//        Map<Integer,Integer> hashMap = new HashMap<Integer, Integer>();
//        for (int num : nums){
//            if (hashMap.containsKey(num)){
//                int now = hashMap.get(num);
//                hashMap.put(num, now +1);
//            }else {
//                hashMap.put(num, 1);
//            }
//        }
//        for (int num: nums) {
//            if (hashMap.get(num) == 1) return  num;
//        }
//        return 0;
        int res = nums[0];
        for (int i = 1; i < nums.length; i++) {
           res ^= nums[i];
        }
        return res;
    }
}
