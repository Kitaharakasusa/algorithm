/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length === 0) return [];
    intervals.sort( (a, b) => {
        return a[0] - b[0];
    });
    let res = [];
    res.push(intervals[0]);
    for(let i = 1; i < intervals.length; i++) {
        if(res[res.length-1][1] < intervals[i][0]) {
            res.push(intervals[i]);
        } else {
            res[res.length - 1][1] = Math.max(res[res.length -1][1], intervals[i][1]);
        }
    }
    return res;

};