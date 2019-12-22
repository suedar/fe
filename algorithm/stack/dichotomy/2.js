// https://leetcode-cn.com/problems/binary-search/

var search = function(nums, target) {
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
    return -1;
};

console.log(search([-1,0,3,5,9,12], 9))
console.log(search([-1,0,3,5,9,12], 2))