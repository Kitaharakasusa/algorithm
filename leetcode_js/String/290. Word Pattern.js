/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    if(pattern === str) return true;

    let patternMap = {}, strMap = {};
    for(let i = 0; i < pattern.length; i++) {
        if(patternMap.hasOwnProperty(pattern[i])){
            patternMap[pattern[i]] += 1;
        }else {
            patternMap[pattern[i]] = 1;   
        }
    }
    let strArr = str.split(' ');
    
    for(let i = 0; i < strArr.length; i++) {
        if(strMap.hasOwnProperty(strArr[i])){
            strMap[strArr[i]] += 1;
        }else {
            strMap[strArr[i]] = 1;   
        }
    }
    console.log(strMap);
    console.log(patternMap);

    for(let i = 0; i < strArr.length; i++) {
        if(strMap[strArr[i]] !== patternMap[pattern[i]]) return false; 
    }
    return true;

};

console.log(wordPattern("jquery", "jquery"));