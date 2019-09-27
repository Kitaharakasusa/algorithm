package leetcode_java;

import java.util.*;

/**
 * Create by Kitahara on 2018/11/4 22:50
 * email kitaharakasusa@gmail.com
 */


class Interval {
   int start;
   int end;
   Interval() { start = 0; end = 0; }
   Interval(int s, int e) { start = s; end = e; }
 }

public class MergeIntervals {
    public List<Interval> merge(List<Interval> intervals) {
        if(intervals.size() <=1){
            return intervals;
        }
        List<Interval>result = new ArrayList<Interval>();
        Collections.sort(intervals, new Comparator<Interval>() {
            public int compare(Interval l1, Interval l2) {
                return l1.start == l2.start? l1.end - l2.end:  l1.start - l2.start;
            }
        });
        Interval temp = intervals.get(0);
        for (int i = 1; i< intervals.size(); i++){
            Interval inte = intervals.get(i);
            if (inte.start <= temp.end) {
                temp.start = Math.min(inte.start, temp.start);
                temp.end = Math.max(inte.end, temp.end);
            }else {
                result.add(temp);
                temp = inte;
            }

        }
        result.add(temp);
        return result;

    }
}
