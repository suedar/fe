/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let dp0 = 0;
    let dp1 = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let prevZero = dp0;
        dp0 = Math.max(dp1, dp0);
        dp1 = prevZero + nums[i];
    }
    return Math.max(dp1, dp0);
};


console.log(massage([2,7,9,3,1]));