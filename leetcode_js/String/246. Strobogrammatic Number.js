/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    myMap = new Map();
    myMap.set('6', '9');
    myMap.set('9', '6');
    myMap.set('0', '0');
    myMap.set('8', '8');
    myMap.set('1', '1');

    let left = 0, right = num.length - 1;
    while(left <= right) {
        if(!myMap.has(num.charAt(left))) return false;
        if(myMap.get(num.charAt(left)) !== num.charAt(right)) return false;
        left++;
        right--
    }
    return true;
    
};