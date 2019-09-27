function ListNode(x){
    this.val = x;
    this.next = null;
}
/**
 * @param  {ListNode} pHead1
 */
function deleteDuplication(pHead)
{
    // write code here
    let newHead = new ListNode('head');
    newHead.next = pHead;
    let pHead1 = newHead;
    let qHead = pHead1.next;

    while(qHead) {
        while ((qHead.next!=null) && (qHead.val == qHead.next.val)) {
            qHead = qHead.next;
        }
        //没移动
        if(pHead1.next == qHead)  {
            pHead1 = qHead;
            qHead = qHead.next;
        }
        //移动了
        else {
            qHead = qHead.next;
            pHead1.next = qHead;
        }
    }
  return newHead.next;
   
}