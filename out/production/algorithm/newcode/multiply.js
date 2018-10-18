/**
 * @param  {Array} array
 */
function multiply(array)
{
    let res = [];
    if(array.length) {
        for(let i = 0; i < array.length; i++) {
            res.push(0);
        }
        for(let i  = 1; i < array.length; i++) {
            res[i] = array[i-1]*res[i-1];
        }
        let temp = 1;
        for(let j = array.length -2; j >=0; j--) {
            temp *= array[j+1];
            res[j] *= temp;
        }
    }
    return res;
    
    // write code here
}