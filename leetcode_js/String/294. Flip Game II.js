/**
 * @param {string} s
 * @return {boolean}
 */
var canWin = function(s) {
    if(s === null || s.length < 2){
        return false;
    }
    let winMap = new Map();
    return helper(s, winMap);
};

/**
 * 
 * @param {string} s 
 * @param {Map} winMap 
 */
let helper = (s, winMap) => {
    if(winMap.has(s)){
        return winMap[s];
    }
    for(let i = 0; i < s.length - 1; i++) {
        if(s.startsWith("++", i)){
            let t = s.substring(0, i) + "--" + s.substring(i+2);
            if(!helper(t, winMap)){
                winMap[s] = true;
                return true;
            }
        }
    }
    winMap[s] = false;
    return false;
}