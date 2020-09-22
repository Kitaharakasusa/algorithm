/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    let dp = new Array(396).fill(0);
    newDays = new Set(days);
    for(let i = 31; i < 396; i++){
        if(newDays.has(i - 30)){
            dp[i] = Math.min(dp[i-1]+costs[0], dp[i-7] +costs[1], dp[i-30] + costs[2]);
        }else{
            dp[i] = dp[i-1];
        }
    }
    return dp[days[days.length - 1] + 30];
};

mincostTickets([1,4,6,7,8,20], [2,7,15]);