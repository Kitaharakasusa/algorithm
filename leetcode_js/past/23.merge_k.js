function ListNode(val) {
 this.val = val;
  this.next = null;
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length === 0) return null;
    let n = lists.length;
    while(n > 1) {
        let k = Math.floor((n + 1) /2);
        for(let i = 0; i < Math.floor(n /2); i++) {
            lists[i] = mergeTwoLists(lists[i], lists[i +k])
        }
        n = k;
    }
    return lists[0];
};

/**
 *
 * @param {ListNode} l1
 * @param {ListNode}l2
 */
function mergeTwoLists(l1, l2) {
    let head  = new ListNode(-1);
    let cur = head;
    while(l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = l1;
            l1 = l1.next;
        }else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    if (l1) cur.next = l1;
    if (l2) cur.next = l2;
    return head.next;
}