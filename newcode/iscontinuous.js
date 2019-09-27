/**
 * @param  {Array} numbers
 */
function IsContinuous(numbers)
{
    // write code here
    if(numbers.length !== 5) return false;
    numbers.sort();
    let max = -1;
    let min = 14;
    let flag = 0;
    for(let i = 0 ;i<numbers.length; i++) {
        let number  = numbers[i];
        if(number < 0 || number > 13) return false;
        if(number === 0) continue;
        
        if((flag >> number) & 1 ==1) return false;
        flag |= (1<< number);

        if(number > max) max = number;
        if(number < min ) min = number;
        if(max - min >=5) return false;
    }
    return true;

}

let a  = IsContinuous([0,2,3,4,6])
console.log(a);
