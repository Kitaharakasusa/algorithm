/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function(arr, target) {
    arr.sort((a,b)=>a-b)
    let n = arr.length;
    let prefix = new Array(n+1).fill(0);
    for(let i = 1; i <=n; i++){
        prefix[i]= prefix[i-1] + arr[i-1];
    }
    let r = Math.max(...arr);
    let ans = 0, diff = target;
    for(let i = 1; i <= r; i++){
        let index = arr.findIndex(ele=> ele >= i);
        let cur = prefix[index] + (n - index)*i;
        if(Math.abs(cur - target) < diff) {
            ans = i;
            diff = Math.abs(cur-target);
        } 
    }
    return abs;
};