/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let min = "", left = 0, right = -1;
    let map = new Map();
    t.split('').forEach(element => {
        if(!map.has(element)) map.set(element, 1);
        else map.set(element, map.get(element)+1);
    });
    let count = map.size;
    
    while(right <= s.length){
        if(count === 0){
            let current = s[left];
            if(map.has(current)) map.set(current, map.get(current)+1);
            if(map.get(current)>0) count++;

            let temp = s.substring(left, right+1)
            if(min === "") min = temp;
            else min = min.length < temp.length? min:temp;

            left++;
        }else {
            right++;
            let current = s[right];
            if(map.has(current))map.set(current, map.get(current)-1);
            if(map.get(current) === 0) count--;
        }

    }
    return min;
};


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow2 = function(s, t) {
    let map = new Map();
    t.split('').forEach(element=> {
        if(!map.has(element)) map.set(element, 1);
        else map.set(element, map.get(element)+1);
    });
    let counter = t.length, begin = 0, end = 0, minLen = Number.MAX_VALUE, head = 0;
    console.log(map);
    
    while(end < s.length){
        if(map.get(s[end]) > 0){
           counter--;
        }
        map.set(s[end], map.get(s[end])-1);
        end++;

        while(counter == 0){
            if(end-begin < minLen) minLen = end - (head = begin);
            if(map.get(s[begin]) === 0){
                counter++;
            }
            map.set(s[begin], map.get(s[begin])+1);
            begin++;
        }
    }
    return minLen == Number.MAX_VALUE? "":s.substr(head,minLen);
};


console.log(minWindow2('ADOBECODEBANC', 'BANC'));
