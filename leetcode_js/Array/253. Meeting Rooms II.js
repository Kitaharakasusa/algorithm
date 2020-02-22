/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let starts = new Array(intervals.length);
    let ends = new Array(intervals.length);
    for(let i = 0; i < intervals.length; i++) {
        starts[i] = intervals[i][0];
        ends[i] = intervals[i][1];
    }
    starts = starts.sort((a, b) => a - b);
    ends = ends.sort((a, b) => a - b);
    let rooms = 0;
    let endsItr = 0;
    for(let i = 0; i < starts.length; i++){
        if(starts[i] < ends[endsItr]){
            rooms++;
        }else{
            endsItr++;
        }
    }
    return rooms;
};