// https://leetcode-cn.com/problems/search-insert-position/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums[0] === target || nums[0] > target) {
        return 0;
    }
    if (nums[nums.length - 1] < target) {
        return nums.length;
    }
    if (nums.length === 2 && (nums[nums.length - 1] > target || nums[nums.length - 1] === target)) {
        return nums.length - 1;
    }
    let min = 0;
    let max = nums.length - 1;
    let value = 0;
    while(min < max && nums[min + 1] !== nums[max]) {
        let mid = Math.ceil((max + min) / 2);
        if (nums[mid] < target) {
            min = mid;
            value = max;
        }
        else if (nums[mid] > target) {
            max = mid;
            value = max;
        }
        else if (nums){
            min = max = mid;
            value = min;
        }
    }
    return value;
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert2 = function(nums, target) {
    if (target < nums[0]) {
        return 0;
    }
    if (target > nums[nums.length - 1]) {
        return nums.length;
    }
    let len = nums.length;
    let left = 0;
    let right = len - 1;
    while (left < right) {
        let mid = (left + right + 1) >>> 1;
        if (nums[mid] > target) {
            right = mid - 1;
        }
        else {
            left = mid;
        }
    }
    if (nums[left] === target) {
        return left;
    }
    return left + 1;
};
// console.log(searchInsert2([1, 3], 2));
// console.log(searchInsert2([1, 3], 1));
// console.log(searchInsert2([1, 3], 3));


// console.log([1, 3], 2)
// console.log([1, 3], 1)
// console.log([1, 3], 3)
console.log(searchInsert2([2,7,8,9,10], 9));
console.log(searchInsert2([1,3,5,6], 2));
console.log(searchInsert2([1,3,5,6], 5));
console.log(searchInsert2([1,3,5,6], 2));
console.log(searchInsert2([1,3,5,6], 7));
// console.log(searchInsert2([1,3,5,6], 0));
// console.log(searchInsert2([1, 2, 3], 1));