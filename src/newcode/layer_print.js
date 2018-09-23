 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function Print(pRoot)
{
    // write code here
    let res = [];
    let queue =[];
    if(pRoot == null) return res;
    
    queue.push(pRoot);
    while (queue.length) {
        let len = queue.length;
        let tempArr = [];
        for(let i = 0; i < len; i++) {
            let temp = queue.shift();
            tempArr.push(temp.val);
            if(temp.left) {
                queue.push(temp.left);
            }
            if(temp.right) {
                queue.push(temp.right);
            }
        }
        res.push(tempArr);
    }
    return res;
}