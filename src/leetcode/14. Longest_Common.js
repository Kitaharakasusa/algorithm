/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // if(strs.length == 0) return "";
    // let pre = strs[0];
    // for(let i = 1; i<strs.length;i++) {
    //     while(strs[i].indexOf(pre)!=0) {
    //         pre = pre.substring(0,pre.length-1);
    //         if(pre.length == 0) return "";
    //     }
    // }
    // return pre;
    if(strs.length ==0 || strs ==null) return "";
    for(let i = 0; i < strs[0].length() ;i++){
        let c = strs[0].charAt(i);
        for(let j = 1; j < strs.length;j++) {
            if( i == strs[j].length || strs[j].charAt(i) != c)
                return strs[0].substring(0,i);
        }
    }
    return strs[0];
};