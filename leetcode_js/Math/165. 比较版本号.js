/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let nums1 = version1.split('.');
    let nums2 = version2.split('.');
    let n1 = nums1.length, n2 = nums2.length;
    let i1=0, i2 = 0;
    for(let i = 0; i < Math.max(n1, n2);i++){
        i1 = i < n1? parseInt(nums1[i]):0;
        i2 = i < n2? parseInt(nums2[i]):0;
        if(i1!==i2){
            return i1 > i2? 1:-1;
        }
    }
    return 0;
};

