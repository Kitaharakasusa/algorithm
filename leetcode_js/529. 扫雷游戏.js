/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
  const m = board.length;
  const n = board[0].length;
  const dx = [1,1,1,-1,-1,-1,0,0];
  const dy = [1,0,-1,0,1,-1,1,-1];
  const inBound = (x,y)=> x >= 0 && x < m && y>=0 && y < n;

  const update = (x, y) =>{
    if(!inBound(x,y) || board[x][y]!='E') return;
    let count = 0;
    for(let i = 0;i < 8; i++){
      const nX = x + dx[i];
      const nY = y + dy[i];
      if(inBound(nX, nY) && board[nX][nY] === 'M'){
        count++;
      }
    }
    if(count === 0){
      board[x][y] = 'B';
      for(let i = 0; i < 8; i++){
        update(x + dx[i], y + dy[i])
      }
    }else {
      board[x][y] = count + '';
    }
  }
  const [cX, cY] = click;
  if(board[cX][cY] === 'M'){
    board[cX][cY] = 'X';
  }else{
    update(cX, cY);
  }
  return board;

};