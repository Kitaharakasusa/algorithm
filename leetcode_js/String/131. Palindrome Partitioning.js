/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const output = [];
    const partition = [];
    const isPalindrome = str=> str === str.split('').reverse().join('');
    const findPalindrome = (str, start, parts, result)=> {
        if(start === str.length){
            result.push([...parts])
            return;
        }
        for(let i = start + 1; i <=str.length; i++){
            const target = str.substring(start, i);
            if(isPalindrome(target)){
                parts.push(target);
                console.log(parts,start)
                findPalindrome(str,i,parts, result);
                parts.pop();
                console.log(parts,start)
            }
        }
    }

    findPalindrome(s, 0, partition, output);
    return output;
};
console.log(partition('aab'))
