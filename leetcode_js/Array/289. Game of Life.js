/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  let row =  board.length, column = board[0].length;
  for(let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
          let count = 0;
          for(let I = Math.max(i-1, 0); I < Math.min(i+2, row); I++) {
              for(let J = Math.max(j-1,0); J < Math.min(j+2, column); J++) {
                  count += board[I][J] & 1;
            }
          }
          count -= board[i][j] & 1;
          
          if (board[i][j] === 1 && count >=2 && count <=3) {
              board[i][j] = 3;
          }
          if (board[i][j] === 0 && count ===3) {
              board[i][j] = 2;
          }

      }
  }
  for (let i = 0; i < row; i++) {
      for(let j = 0; j < column; j++) {
          board[i][j] >>= 1;
      }
  }
}
