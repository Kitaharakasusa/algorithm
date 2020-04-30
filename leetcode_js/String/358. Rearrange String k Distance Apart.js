/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var rearrangeString = function(s, k) {
    let length = s.length;
    let count = new Array(26).fill(0);
    let valid = new Array(26).fill(0);
    for(let i = 0; i < length; i++) {
        count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    
    let res = '';
    for(let i = 0; i < length; i++) {
        let candidatePos= findValidMax(count, valid, i);
        if( candidatePos === -1) return '';
        count[candidatePos]--;
        valid[candidatePos] = i+k;
        res+= String.fromCharCode('a'.charCodeAt(0) + candidatePos);
        console.log(res);

    }
    return res;

};

let findValidMax = function(count, valid, index){
    let max = Number.MIN_VALUE;
    let candidatePos = -1;
    for(let i = 0; i < count.length; i++) {
        if(count[i] > 0 && count[i] > max && index >= valid[i]) {
            max = count[i];
            candidatePos = i;
        }
    }
    return candidatePos;
}

console.log(rearrangeString('aabbcc', 3));