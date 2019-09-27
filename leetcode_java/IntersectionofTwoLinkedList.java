package leetcode_java;

/**
 * Create by Kitahara on 2018/12/6 22:43
 * email kitaharakasusa@gmail.com
 */
public class IntersectionofTwoLinkedList {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
//        if (headA == null || headB == null) return null;
//      ListNode ha = new ListNode(0);
//      ha.next = headA;
//      ListNode hb = new ListNode(0);
//      hb.next = headB;
//      int lena = 0, lenb = 0;
//      while (ha.next !=null){
//          lena ++;
//          ha = ha.next;
//      }
//      while (hb.next != null) {
//          lenb ++;
//          hb = hb.next;
//      }
//      if (lena > lenb) {
//          for (int i = 0 ; i < lena - lenb; i++) {
//              headA = headA.next;
//          }
//          while (headA != headB) {
//              headA = headA.next;
//              headB = headB.next;
//          }
//      }else{
//          for (int i = 0 ; i < lenb - lena; i++) {
//              headB = headB.next;
//          }
//          while (headA != headB) {
//              headA = headA.next;
//              headB = headB.next;
//          }
//      }
//      return headA;
        if (headA == null || headB == null) return null;
        ListNode a = headA;
        ListNode b = headB;

        while (a != b) {
            a = a == null? headB : a.next;
            b = b == null? headA : b.next;
        }
        return a;
    }
}
