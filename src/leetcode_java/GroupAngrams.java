package leetcode_java;

import java.util.*;

/**
 * Create by Kitahara on 2018/11/2 20:23
 * email kitaharakasusa@gmail.com
 */
public class GroupAngrams {
    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>>res = new ArrayList<>();
        if(strs == null)return res;
        Map<String, List<String>> map = new HashMap<>();
        for(String s:strs) {
            char[] sarr = s.toCharArray();
            Arrays.sort(sarr);
            String key = String.valueOf(sarr);
            if (!map.containsKey(key)) map.put(key, new ArrayList<String>());
            map.get(key).add(s);
        }
        return new ArrayList<>(map.values());
    }
}
