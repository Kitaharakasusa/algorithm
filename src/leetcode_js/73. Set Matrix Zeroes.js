/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let a = [];

    let row = matrix.length;
    let col = matrix[0].length;
    for(let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++){
            if (matrix[i][j] === 0){
                let pos = [];
                pos[0] = i;
                pos[1] = j;
                a.push(pos);
            }
        }
    }
    for (let count = 0; count < a.length; count++) {
        let rowpos = a[count][0];
        let colpos = a[count][1];
        for (let i = 0; i < row; i++){
            matrix[i][colpos] = 0;
        }
        for (let j = 0; j < col; j++) {
            matrix[rowpos][j] = 0;
        }
    }

};