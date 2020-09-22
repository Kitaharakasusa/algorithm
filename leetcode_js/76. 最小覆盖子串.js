/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let map = new Map();
    t.split('').forEach(value=>{
        if(map.has(value)) map.set(value, map.get(value) + 1)
        else map.set(value, 1);
    })
    let head = 0, end = 0, begin = 0, minLen = Number.MAX_VALUE;
    let count = t.length;
    while(end < s.length){
        if(map.get(s[end]) >0 ){
            count--;
        }
        map.set(s[end], map.get(s[end])-1)
        end++;
        while(count === 0){
            if(minLen > end - begin) {
                minLen = end - begin;
                head = begin;
            }
            if(map.get(s[begin]) === 0){
                count++;
            }
            map.set(s[begin], map.get(s[begin]) + 1);
            begin++
        }
    }
    return minLen === Number.MAX_VALUE? "":s.substr(head, minLen);
};