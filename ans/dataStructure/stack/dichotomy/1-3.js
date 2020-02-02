// https://leetcode-cn.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return dichotomy(nums, target, 0, nums.length);
};

function dichotomy(nums, target, left, right) {
    if (right - left > 3) {
        let mid = (right + left + 1) >>> 1;
        dichotomy(nums, target, mid, right);
        dichotomy(nums, target, left, mid - 1);
    }
    for (let i = left; i < right; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    return -1;
}


// console.log(search([4,5,6,7,0,1,2], 7))
console.log(search([4,5,6,7,0,1,2], 3))
