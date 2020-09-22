/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    let wordSet =  new Set(wordList);
    if(!wordSet.has(endWord))return [];
    wordSet.delete(beginWord);
    let beginSet = new Set([beginWord])
    let map = new Map();
    let distance = 0;
    let minDistance = 0;
    while(beginSet.size){
        if(beginSet.has(endWord))break;
        let trySet = new Set();
        for(let word of beginSet){
            let mapSet = new Set();
            for(let i = 0; i < word.length; i++){
                for(let j = 0; j < 26; j++){
                    let tryWord = word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1);
                    if (!minDistance && tryWord === endWord) minDistance = distance + 1;
                    if (wordSet.has(tryWord)) {
                        trySet.add(tryWord);
                        mapSet.add(tryWord);
                    }

            }
            map.set(word, mapSet);
        }
        distance++;
        for(let w of trySet){
            wordSet.delete(w)
        }
        beginSet = trySet;
    }
    let ans = [];
    let path = [beginWord];
    dfs(beginWord, endWord, ans, path, map, minDistance, 0);
    return ans;
}

function dfs (beginWord, endWord, ans, path, map, minDistance, distance) {
    if (distance > minDistance) return ;
    if (beginWord === endWord) {
        ans.push(path.slice());
    }
    let words = map.get(beginWord)
    if (words) {
        for (let word of words) {
            path.push(word)
            dfs(word, endWord, ans, path, map, minDistance, distance + 1);
            path.pop();
        }
    }
}




// var findLadders = function(beginWord, endWord, wordList) {
//     let res = [];
//     let dict = new Set(wordList);
//     let p = [];
//     p.push(beginWord);
//     let paths = [];
//     paths.push(p);
//     let level = 1, minLevel = Number.MAX_SAFE_INTEGER;
//     let words = new Set();
//     while(paths.length !== 0){
//         let t = paths.shift();
        
//         if(t.length > level){
//             for(let w of words) dict.delete(w);
//             words.clear();
//             level = t.length;
//             if(level > minLevel) break;
//         }
//         let last = t[t.length - 1];
//         for(let i = 0; i < last.length; i++) {
//             let newLastArray = last.split('');
//             for(let ch = 'a'.charCodeAt(0); ch <='z'.charCodeAt(0); ch++){
//                 newLastArray[i] = String.fromCharCode(ch);
//                 let newLast = newLastArray.join('');
//                 if(!dict.has(newLast))continue;
//                 words.add(newLast);
//                 let nextPath = t;
//                 nextPath.push(newLast);
//                 if(newLast == endWord) {
//                     res.push(nextPath);
//                     minLevel = level;
//                 }else paths.push(nextPath);
//             }
//         }
//     }
//     return res;
// };

findLadders('hit','cog',["hot","dot","dog","lot","log","cog"])