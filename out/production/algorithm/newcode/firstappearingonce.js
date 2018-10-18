let map = {};
function Init()
{
    // write code here
    map = {};
}
//Insert one char from stringstream
function Insert(ch)
{
    if(!map[ch]) map[ch] = 1;
    else map[ch]++;
    // write code here
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    for (let ch in map) {
        if (map.hasOwnProperty(ch)) {
            if (map[ch] === 1) {
                return ch;
            }
        }
    }
    return '#';
    
}