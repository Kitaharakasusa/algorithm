/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length, n = nums2.length, left = Math.floor((m + n + 1)/2), right = Math.floor((m+n+2)/2);
    return (findKth(nums1, 0, nums2, 0, left) + findKth(nums1, 0, nums2, 0, right)) / 2;
};

let findKth = function(nums1, i, nums2, j , k){
    if(i >= nums1.length) return nums2[j + k - 1];
    if(j >= nums2.length) return nums1[i + k - 1];

    if(k == 1) return Math.min(nums1[i], nums2[j]);
    let midVal1 = (i+ Math.floor(k/2) - 1 < nums1.length)? nums1[i+ Math.floor(k/2) - 1] : Number.MAX_VALUE;
    let midVal2 = (j + Math.floor(k/2) - 1 < nums2.length)? nums2[j+ Math.floor(k/2) - 1] : Number.MAX_VALUE;

    if(midVal1 < midVal2) {
        return findKth(nums1, i + Math.floor(k/2), nums2, j, k - Math.floor(k/2));
    }else{
        return findKth(nums1, i, nums2, j + Math.floor(k/2), k - Math.floor(k/2));
    }
}