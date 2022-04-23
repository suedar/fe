/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    if (nums.length === 1) {
        return nums[0]
    }
    let res = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        if (i === nums.length - 1) {
            res = Math.max(res, nums[i]);
        }
        else {
            res = Math.max(nums[i] * nums[i + 1], res, nums[i]);
        }
    }

    console.log(res, 'res');
    return res;
};

maxProduct([0,2]);