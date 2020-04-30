/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if(s.lenght === 0 || words.length ===0) return [];
    let res = [];
    let n = words.length, len = words[0].length;
    let wordCnt = new Map();
    for(let word of words){
        if(wordCnt.has(word)){
            wordCnt.set(word,wordCnt.get(word)+1);
        }else{
            wordCnt.set(word,1);
        }
    }
    console.log(wordCnt)
    for(let i = 0; i <=s.length - n*len; i++ ){
        let strCnt = new Map();
        let j = 0;
        for(j = 0; j < n; j++){
            let t = s.substr(i+j*len,len);
            if(!wordCnt.get(t))break;
            strCnt.set(t, strCnt.get(t)===undefined? 1: strCnt.get(t)+1)
            if(strCnt.get(t) > wordCnt.get(t)) break;
        }
        if(j === n)res.push(i);
    }
    return res;
};

findSubstring("barfoothefoobarman",
["foo","bar"])