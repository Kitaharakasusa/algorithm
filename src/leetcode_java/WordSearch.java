package leetcode_java;

/**
 * Create by Kitahara on 2018/11/19 14:22
 * email kitaharakasusa@gmail.com
 */
public class WordSearch {
    public boolean exist(char[][] board, String word) {

      if (board == null || word == null || board.length ==0 || word.length() ==0)
          return false;
      for (int i = 0; i <board.length; i++){
          for (int j = 0 ; j < board[0].length; j++) {
              if (dfs(board,word,i,j,0))
                  return true;
          }
      }
      return  false;
    }
    private boolean dfs(char[][] board, String word, int i , int j, int pos) {
        if (pos == word.length())
            return true;
        if (i >= board.length || i <0 || j<0 ||j >=board[0].length)
            return false;
        if (board[i][j] == '#')
            return false;
        if (board[i][j]!= word.charAt(pos))
            return false;
        char temp = board[i][j];
        board[i][j] = '#';
        boolean res = dfs(board, word,i-1, j, pos+1)
                || dfs(board, word,i+1, j, pos+1)
                || dfs(board, word,i, j-1, pos+1)
                || dfs(board, word,i, j+1, pos+1);
        board[i][j] = temp;
        return res;
    }
}
