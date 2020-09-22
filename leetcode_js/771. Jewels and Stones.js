/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let map = {};
    for(let i = 0; i < J.length; i++){
        map[J[i]] = true;
    }
    let res = 0;
    for(let j = 0; j < S.length; j++){
        if(map[S[j]]){
            res++;
        }
    }
    return res;
};