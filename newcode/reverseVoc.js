function ReverseSentence(str)
{
    // write code here
    let a = str.splice(' ');
    a.reverse();
    let res = a.join(' ');

   return res;
}