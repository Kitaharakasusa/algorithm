/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    let res = [];
    let from = [];
    from[0] = [0];
    for (let i = 1; i <= s.length; i++) {
        from[i] = [];
        for (let j = 0; j < i; j++) {
            if ( from[j].length && wordDict.has(s.substring(j, i))) {
                from[i].push(j);
            }
        }
    }
    build(s.length, '');
    return res;

    function build(idx, suffix) {
        if (!idx) return res.push(suffix);
        from[idx].forEach(function (from) {
            build(from, suffix === ''? s.substring(from, idx):
            s.substring(from, idx) +'' +suffix);

        })
    }
};
