/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x <=1) return x;
    let left = 0; right = x;
    while(left < right){
        let mid = left + Math.floor((right - left) / 2);
        if(Math.floor(x / mid) >= mid) left = mid +1;
        else right = mid;
    }
    return right - 1;
};

console.log( mySqrt(8));