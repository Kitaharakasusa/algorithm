/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
   let res = 0, start = 0, n = s.length;
   let st = [];
   for(let i = 0; i <n; i++){
       if(s[i] === '(') st.push(i);
       else if(s[i] === ')') {
           if(st.length === 0) start = i +1;
           else {
               st.pop();
               res = st.length === 0? Math.max(res, i - start + 1) : Math.max(res, i - st[st.length-1]);
           }
       }
   }
   return res;
};
// var longestValidParentheses = function(s) {
//     if(s.length <=1)return 0;
//     let curMax = 0;
//     let longest = new Array(s.length).fill(0);
//     for(let i = 1; i < s.length; i++){
//         if(s[i] === ')'){
//             if(s[i-1] === '('){
//                 longest[i] = (i-2) >=0? (longest[i-2] +2):2;
//                 curMax = Math.max(longest[i], curMax);
//             }
//             else{
//                 if(i-longest[i-1]-1 >=0 && s[i-longest[i-1]-1] === '('){
//                     longest[i] = longest[i-1] +2 +((i - longest[i-1] - 2 >=0)?longest[i-longest[i-1]-2]:0);
//                     curMax=Math.max(longest[i], curMax);
//                 }
//             }
//         }
//     }
//     return curMax;
// };
console.log(longestValidParentheses('()((()))'));