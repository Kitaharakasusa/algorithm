/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const res = nums
    .map(n => n.toString())
    .sort((a, b) => {
        for(let k = 0; k < a.length+ b.length; k++) {
            let i = k % a.length;
            let j = k % b.length;
            if(a[i] > b[j]) return -1;
            if(a[i] < b[j]) return 1;
        }
        return 0;
    }).join('');
    return res[0] === '0' ? '0' :res;
};