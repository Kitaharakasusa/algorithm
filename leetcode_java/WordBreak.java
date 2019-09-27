package leetcode_java;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Create by Kitahara on 2018/12/5 12:53
 * email kitaharakasusa@gmail.com
 */
public class WordBreak {
    public boolean wordBreak(String s, List<String> wordDict) {
//        Set<String> set = new HashSet<>(wordDict);
//        List<Boolean> res = new ArrayList<>();
//        for (int i = 0; i < s.length()+1; i++) {
//            res.add(false);
//        }
//        res.set(0, true);
//        for (int i = 0; i < res.size(); i++){
//            for (int j = 0; j < i; j++) {
//                if (res.get(j) && set.contains(s.substring(j,i+1))) {
//                    res.set(i, true);
//                    break;
//                }
//            }
//        }
//        return res.get(res.size());
        boolean[] f = new boolean[s.length()+1];
        f[0] = true;
        for (int i = 1; i <= s.length(); i++){
            for( int j = 0; j < i ; j++) {
                if (f[j] && wordDict.contains(s.substring(j, i))) {
                    f[i] = true;
                    break;
                }
            }
        }
        return f[s.length()];

//        int len = s.length();
//        boolean[] dp = new boolean[len];
//
//        for (int i = 0; i < len; i++) {
//            for (String word : wordDict) {
//                if (word.length() <= i + 1 && s.substring(i - word.length() + 1, i + 1).equals(word)) {
//                    int index = i - word.length();
//                    if (index < 0)  {
//                        dp[i] =  true;
//                    } else {
//                        dp[i] = dp[index];
//                    }
//                    if(dp[i]) break;
//                }
//            }
//        }
//
//        return dp[len - 1];


    }
}
