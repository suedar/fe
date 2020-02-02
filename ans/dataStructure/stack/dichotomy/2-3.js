/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let n = nums.length;
    let left = 1;
    let right = n - 1;
    if (n === 1) {
        return nums[0]
    }
    if (nums[0] < nums[right]) {
        return nums[0]
    }
    while(left < right) {
        let mid = (left + right + 1) >>> 1;
        if (nums[mid] > nums[0]) {
            left = mid;
        }
        else {
            right = mid - 1;
        }
    }
    if (left !== n - 1 && nums[left] > nums[left + 1]) {
        return nums[left + 1]
    }
    if (left !== 0 && nums[left] > nums[left - 1]) {
        return nums[left - 1]
    }
    return nums[left];
};

console.log(findMin([6,7,8,1,2,3,4,5]));
console.log(findMin([4,5,6,7,0,1,2]))
console.log(findMin([7,0,1,2,4,5,6]))
console.log(findMin([5,6,7,0,1,2,4]))
console.log(findMin([4, 5, 1, 2, 3]))
console.log(findMin([3,4,5,6,7,1,2]))
console.log(findMin([5, 2, 1]))
// [4,5,6,7,0,1,2]
// [4, 5, 1, 2, 3]