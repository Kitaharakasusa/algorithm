

function ListNode(val) {
    this.val = val;
    this.next = null;
}


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if(head === null) return null;
    return toBST(head,null);
};

/**
 *
 * @param {ListNode}head
 * @param {ListNode}tail
 */
function toBST(head,tail) {
    let slow = head;
    let fast = head;
    if( head === tail) return null;

    while (fast !== tail && fast.next !== tail) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let thead = new TreeNode(slow.val);
    thead.left =  toBST(head, slow);
    thead.right = toBST(slow.next, tail);
    return thead;
}