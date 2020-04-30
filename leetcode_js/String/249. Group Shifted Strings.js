/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    let res = [];
    let codeMap = new Map();
    
    for(let i = 0; i < strings.length; i++){
        let nowcode = "";
        let nowString = strings[i];
        let offset = nowString.charCodeAt(0) - 'a'.charCodeAt(0); 
    
        for(let j = 0; j < nowString.length; j++){
            let t  = nowString.charCodeAt(j) - offset;
            nowcode += t - 'a'.charCodeAt(0) < 0? t+26 :t; n
            nowcode += ",";
        }
        if(!codeMap.has(nowcode)) {
            codeMap.set(nowcode, []);
        }
        codeMap.get(nowcode).push(nowString);
        
    }

    for(let key of codeMap.keys()){
        // console.log(codeMap[key])
        res.push(codeMap.get(key));
    }

    
    return res;
};

groupStrings(["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]);