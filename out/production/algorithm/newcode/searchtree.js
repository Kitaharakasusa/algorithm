function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
let index  = 0;
function KthNode(pRoot, k)
{
    // write code here
    if(pRoot != null) {
        let node = KthNode(pRoot.left, k);
        if(node != null) {
            return node;
        }
        index ++;
        if(index == k)
          return pRoot;
        
        node = KthNode(pRoot.right, k);
        if(node != null) 
          return node;
    }
    return null;

}