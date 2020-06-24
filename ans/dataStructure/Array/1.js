/**
 * 
 * https://leetcode-cn.com/problems/merge-sorted-array/
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
//     let i = 0;
//     let j = 0;
//     let k = 0;
//     while(j < n && i < (n + m)) {
//         if (nums1[i] > nums2[j]) {
//             nums1 = [...nums1.slice(0, i), nums2[j], ...nums1.slice(i)];
//             j++;
//             k++;
//         }
//         else if (nums1[i] === 0) {
//             nums1[i] = nums2[j];
//             j++;
//         }
//         i++;
//     }
//     nums1 = nums1.slice(0, nums1.length - k)
//     console.log(nums1)
// };

var merge = function(nums1, m, nums2, n) {
    nums1 = [...nums1.slice(0, nums1.length - n), ...nums2].sort();
};



// console.log(merge([4,5,6,0,0,0], 3, [1,2,3], 3));
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
// console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));