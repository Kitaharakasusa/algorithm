/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1 === '0' || num2 === '0'){
        return '0'
    }

    let res = '0';
    for(let i =  num2.length - 1; i >= 0; i-- ) {
        let carry = 0;
        let temp = [];

        for(let j = 0; j < num2.length - 1 - i; j++ ){
            temp.push(0);
        }
        let n2 = num2.charCodeAt(i) - '0'.charCodeAt(0);
        for(let j = num1.length -1; j>=0 || carry!==0; j--){
            let n1 = j < 0? 0: num1.charCodeAt(j) - '0'.charCodeAt(0);
            let product = (n1 * n2 + carry) %10;
            temp.push(product);
            carry = Math.floor((n1 * n2 + carry) / 10);
        }
        res = addStrings(res, temp.reverse().join(''));

    }
    return res;
};

let addStrings = (num1, num2) => {
    let builder = [];
    let carry = 0;
    for(let i = num1.length - 1, j = num2.length -1; i >=0|| j >=0||carry !==0; i--, j--){
        let x = i < 0? 0: num1.charCodeAt(i) - '0'.charCodeAt(0);
        let y = j < 0? 0: num2.charCodeAt(j) - '0'.charCodeAt(0);
        let sum = (x + y +carry) % 10;
        builder.push(sum);
        carry = Math.floor((x + y + carry) / 10);
    }
    return builder.reverse().join('');
}

console.log(multiply('123','456'))