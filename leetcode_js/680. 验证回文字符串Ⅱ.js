/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let l = 0;
  let r = s.length - 1;
  while(l < r) {
      if(s[l]!==s[r]){
          return isHuiwen(s, l+1, r) || isHuiwen(s, l, r-1)
      }
      l++;
      r--;
  }
  return true;
};

var isHuiwen = function(str, left, right){
    while(left<right){
        if(str[left] === str[right]){
            left++;
            right--
        }else return false
    }
    return true;
}