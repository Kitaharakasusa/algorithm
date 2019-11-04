/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let n = intervals.length;
    let l = -1, r = n;
    while(l < n - 1 && intervals[l+1][1] < newInterval[0]) l++;
    while(r > 0 && intervals[r-1][0] > newInterval[1]) r--;

    if (r > 0) newInterval[1] = Math.max(newInterval[1], intervals[r - 1][1]);
    if (l < n-1) newInterval[0] = Math.min(newInterval[0], intervals[l+1][0]);

    console.log(l, r);
    let res = [];
    for(let i = 0; i <= l; i++){
        res.push(intervals[i]);
    }
    res.push(newInterval);
    for(let j = r; j < n; j++) {
        res.push(intervals[j]);
    }
    
    return res;
};

console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));
