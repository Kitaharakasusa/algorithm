/**
 * @param  {string} str
 */

function ReverseSentence(str)
{
    // write code here
    let a = str.split(" ");
    a.reverse();
    let res = a.join(" ");

   return res;
    
}
console.log(ReverseSentence('student. a am I'));

