/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  let n = s1.length, m = s2.length, t = s3.length;
  if(n+m !== t){
    return false;
  }
  let f = new Array(n+1);
  for(let i = 0; i < n+1; i++){
    f[i] = new Array(m+1);
  }

  f[0][0] = true;
  for(let i = 0; i<=n; i++){
    for(let j = 0; j<=m; j++){
      let p = i + j -1;
      if(i>0){
        f[i][j] = f[i][j] || (f[i-1][j] && s1.charAt(i-1)=== s3.charAt(p));
      }
      if(j>0){
        f[i][j] = f[i][j] || (f[i][j-1] && s1.charAt(j-1)=== s3.charAt(p))

      }
    }
  }
  return f[n][m];


};