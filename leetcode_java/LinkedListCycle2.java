package leetcode_java;

/**
 * Create by Kitahara on 2018/12/5 14:28
 * email kitaharakasusa@gmail.com
 */
public class LinkedListCycle2 {
    public ListNode detectCycle(ListNode head) {
       if (head == null)return null;
       ListNode slow = head;
       ListNode fast = head;
       ListNode entry = head;
       while (fast.next != null && fast.next.next != null) {
           slow = slow.next;
           fast = fast.next.next;
           if (slow == fast) {
               while (slow != entry) {
                   slow = slow.next;
                   entry = entry.next;
               }
               return entry;
           }
       }
       return null;
    }
}
