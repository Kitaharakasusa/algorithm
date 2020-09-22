/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let mask = 1;
    while(mask < num){ 
        mask = (mask<<1) | 1;
    }
    console.log(num^mask)
};

findComplement(11)