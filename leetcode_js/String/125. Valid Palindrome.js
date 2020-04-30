/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if(s.length === 0) return true;
  alphnumber = s.toLowerCase().replace(/[\W]/g, '');
  let front = 0;
  let back = alphnumber.length - 1;

  while(front < back){
      const frontChar = alphnumber[front];
      const backChar = alphnumber[back];
      if(frontChar !== backChar){
          return false
      }
      front++;
      back--;
  }
  return true;
  
};