function FindNumbersWithSum(array, sum)
{
    // write code here
    let res = [];
    let n = array.length;
    let i = 0, j = n -1;
    
    while(i < j ){
        if(array[i] + array[j] === sum) {
            res.push(array[i]);
            res.push(array[j]);
            break;
        }
        while (i < j && array[i] + array[j] > sum) {
            --j;
        }
        while (i < j && array[i] + array[j] < sum) {
            ++i;
        }

    }
    return res;
}