/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// var reverseWords = function(s) {
//     let words = [];
//     let word = "";
//     for(let i = 0; i < s.length; i++){
//        word += s[i];
//     }
//     words = word.split(" ");
//     console.log(words);
    
//     words.reverse();
//     let res = [];
//     for(let j = 0; j < words.length; j++){
//         let word = words[j];
//         for(let ch of word.split("")){
//             res.push(ch);
//         }
//         if(j !==words.length - 1)res.push(" ")
//     }
//     s = res;
//     console.log(s);
// };

// let a  = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"];
// reverseWords(a);

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
   let len = s.length;
   if(len === 0) return;

   reverseWord(s, 0, len-1);
   let start = 0, end = 0;
   while(start < len){
       end = start;
       while(end + 1 < len && s[end+1] !== ' '){
           end++;
       }
       reverseWord(s, start, end);
       start = end + 2;
   }

}


let reverseWord = (s, start, end) =>{
    while(start < end){
        let c = s[start];
        s[start] =  s[end];
        s[end] = c;
        start++, end--;
    }
}