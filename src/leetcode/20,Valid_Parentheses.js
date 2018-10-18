/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for(let i = 0 ; i < s.length; i++){
        let cha = s[i];
        if(cha == '{') stack.push('}');
        else if(cha == '(') stack.push(')');
        else if(cha == '[') stack.push(']');
        else if(stack.length == 0 || stack.pop() != cha) {
            return false;
        }
    
    }
    return stack.length ==0? true: false;
};