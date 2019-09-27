/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // max = 0;
    // for (let i = 0; i < prices.length; i++) {
    //     for (let j = i + 1; j < prices.length; j++) {
    //         if (prices[j] - prices[i] > max ) max = prices[j] - prices [i];
    //     }
    // }
    // return max;
    let result = 0;
    let small = 0;
    if (prices.length === 0) return 0;
    else small = prices[0];
    for (let i = 1; i < prices.length; i++){
        if (prices[i] - small > result) result =  prices[i] - small;
        if (prices[i] < small) small = prices[i];
    }
    return result;
};