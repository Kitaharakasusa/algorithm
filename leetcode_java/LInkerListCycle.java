package leetcode_java;

/**
 * Create by Kitahara on 2018/12/5 13:21
 * email kitaharakasusa@gmail.com
 */


class ListNode {
       int val;
       ListNode next;
       ListNode(int x) {
         val = x;
         next = null;
     }
  }

public class LInkerListCycle {
    public boolean hasCycle(ListNode head) {
        if (head == null) return false;
        ListNode walker = head;
        ListNode runner = head;
        while (runner.next != null && runner.next.next != null){
            walker = walker.next;
            runner = runner.next.next;
            if (walker == runner) return true;
        }
        return false;

//        if(head==null) return false;
//        ListNode walker = head;
//        ListNode runner = head;
//        while(runner.next!=null && runner.next.next!=null) {
//            walker = walker.next;
//            runner = runner.next.next;
//            if(walker==runner) return true;
//        }
//        return false;
    }
}
