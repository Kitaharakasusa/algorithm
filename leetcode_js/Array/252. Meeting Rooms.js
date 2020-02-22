/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    intervals = intervals.sort((a,b)=> a[0] -  b[0]);
    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] <= intervals[i-1][1]){
            return false;
        }
    }
    return true;
};

console.log(canAttendMeetings([[6,10],[13,14],[12,14]]));