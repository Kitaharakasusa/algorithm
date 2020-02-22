/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function(words, word1, word2) {
    let p1 = -1, p2 = -1, min = Number.MAX_VALUE;
    for(let i = 0; i < words.length; i++) {
        let t = p1;
        if(words[i] === word1){
            p1 = i;
        }

        if(words[i] === word2) {
            p2 = i;
        }

        if(p1 !== -1 && p2!==-1) {
            if(word1 === word2 && t !== -1 && t!== p1) {
                min = Math.min(min, Math.abs(t - p1));
            }else if(p1 !== p2)
            {
                min = Math.min(min, Math.abs(p1-p2));

            }
        }
    }
    return min;
};