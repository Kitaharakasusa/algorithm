/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  for(let i = 0, temp = 0,n =matrix.length-1; i<= Math.floor(n/2);i++) {
      for (let j = i; j < n-i;j++) {
          temp = matrix[j][n-1];
          matrix[j][n-i] = matrix[i][j];
          matrix[i][j] = matrix[n-j][i];
          matrix[n-j][i] = matrix[n-i][n-j];
          matrix[n-i][n-j] = temp;
      }
  }

};