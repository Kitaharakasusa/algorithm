
/**
 * @param {number[][]} matrix
 * @return {number}
 */
const dx = [0,1,0,-1];
const dy = [1,0,-1,0];
var longestIncreasingPath = function(matrix) {
  if(matrix.length === 0) return 0;
  const m = matrix.length;
  const n = matrix[0].length;
  const memo = new Array(m);
  for(let i = 0; i < m; i++) memo[i] = new Array(n);
  let res = 1;
  for(let i = 0; i <m; i++){
    for(let j = 0; j < n; j++){
      res = Math.max(res, dfs(matrix, i, j, m, n, memo));
    }
  }
  return res;
};
const dfs = (matrix, i, j, m, n, memo)=> {
  if(memo[i][j])return memo[i][j];
  let max = 1;
  for(let k = 0; k < 4; k++){
    const x = i + dx[k];
    const y = j + dy[k];
    if(x >=0 && x < m && y >=0 && y < n && matrix[x][y] > matrix[i][j]){
      max = Math.max(max, 1 + dfs(matrix, x, y, m, n, memo));
    }
  }
  return memo[i][j] = max;
}