/**
 * @param {character[][]} matrix
 * @return {number}
 */
// var maximalSquare = function(matrix) {
//     let max = 0;
//     for(let i=0; i < matrix.length; i++){
//         for(let j = 0; j < matrix[0].length; j++){
//             if(matrix[i][j] === '1') max = Math.max(max, getmax(matrix, i, j) )
//         }
//     }
//     return max;

// };

// function getmax(matrix, i, j){
//     let m = 0;
//     for(; m+j < matrix[0].length && m+i < matrix.length; m++){
//         for(let p = j; p <= j + m; p++){
//             if(matrix[m+i][p] !== '1')return m * m;
//         }
//         for(let q = i; q < i + m; q++){
//             if(matrix[q][m+j] !== '1') return m*m; 
//         }
//     }
//     return m*m;
// }
var maximalSquare = function(matrix) {
    if(matrix.length===0 || matrix[0].length === 0)return 0;
    let m = matrix.length, n = matrix[0].length, res = 0;
    let dp = new Array(m);
    for(let i = 0; i < m; i++){
        dp[i] = new Array(n).fill(0);
    }
    for(let i = 0; i < m; i++){
        for(let j =0; j < n; j++){
            if(i === 0 || j ===0) dp[i][j] = matrix[i][j].charCodeAt(0) - '0'.charCodeAt(0);
            else if(matrix[i][j] === '1'){
                dp[i][j] = Math.min(dp[i-1][j - 1], Math.min(dp[i][j-1], dp[i-1][j])) + 1;
            }
            res = Math.max(res, dp[i][j]);
        }
    }
    console.log(dp);
    return res * res;
};

maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]);