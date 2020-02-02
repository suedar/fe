/**
 * @param {number[]} nums
 * @return {number}
 */
// var findPeakElement = function(nums) {
//     let len = nums.length;
//     let left = 0;
//     let right = len;
//     if (len === 1) {
//         return 0
//     }
//     return getCenter(nums, 0, right);
// };

// function getCenter(nums, left, right) {
//     if (right - left > 3) {
//         let mid = (right + left + 1) >>> 1;
//         getCenter(nums, left, mid - 1);
//         getCenter(nums, mid, right);
//     }
//     let n = nums.length;
//     for (let i = left; i < right; i++) {
//         if (i === 0) {
//             if (nums[i] > nums[i + 1]) {
//                 return i;
//             }
//         }
//         else if (i === n  - 1) {
//             if (nums[i] > nums[i - 1]) {
//                 return i;
//             }
//         }
//         else {
//             if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
//                 return i;
//             }
//         }
//     }
//     return -1;
// }

// 右边一定有峰值
var findPeakElement = function(nums) {
    let len = nums.length;
    let left = 0;
    let right = len - 1;
    while(left < right) {
        let mid = (right + left) >>> 1;
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
};

console.log(findPeakElement([1,2,3,1]));

// 二分的算法复杂度是O(logN)

