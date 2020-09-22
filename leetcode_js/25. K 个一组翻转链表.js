/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(!head || k === 1)return head;
    let dummy = new ListNode(-1), pre = dummy, cur = head;
    dummy.next = head;
    for(let i = 1; cur; i++){
        if(i % k === 0){
            pre = reverseOneGroup(pre,cur.next);
            cur = pre.next;
        }else{
            cur = cur.next;
        }
    }
    return dummy.next;
};

let reverseOneGroup = function(pre, next) {
    let last = pre.next, cur = last.next;
    while(cur!== next){
        last.next = cur.next;
        cur.next = pre.next;
        pre.next = cur;
        cur = last.next;
    }
    return last;
}