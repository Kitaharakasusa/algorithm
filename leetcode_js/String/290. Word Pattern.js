/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let map = {};
    let words = str.split(" ");
    let patt = pattern.split("");
    let container = [];

    if(words.length !== patt.length) return false;

    for(let i = 0; i < patt.length; i++) {
        if(map.hasOwnProperty(patt[i])) {
            if(map[patt[i]]!==words[i]) {
                return false;
            }else {
                continue;
            }
        }else {
            if(!container.some(item => {return item === words[i];})) {
                map[patt[i]] = words[i];
                container.push(words[i])
            }else {
                return false;
            }
        }
    }

    return true;

};

console.log(wordPattern("jquery", "jquery"));