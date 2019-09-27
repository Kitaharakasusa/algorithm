function LastRemaining_Solution(n, m)
{
    // write code here
    let arr = [];
    for (let index = 0; index < n; index++) {
       arr.push(index);
    }
    let index = 0;
    while(arr.length > 1) {
        index = (index + m - 1)% arr.length;
        arr.splice(index,1);
    }
    return arr.length == 1? arr[0]: -1;
   
    
}
LastRemaining_Solution(1, 2)