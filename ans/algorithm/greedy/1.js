/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let len = nums.length;
    if (len === 0) {
        return null;
    }
    if (len === 1) {
        return nums[0];
    }
    let max = nums[0];
    let maxArr = [max];
    for (let i = 1; i < nums.length; i++) {
        maxArr[i] = Math.max(maxArr[i - 1] + nums[i], nums[i]);
        max = Math.max(max, maxArr[i]);
    }
    return max;
};

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));