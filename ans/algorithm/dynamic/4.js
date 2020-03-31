/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let dp011 = nums[0];
    let dp000 = 0;
    let dp001 = Number.NEGATIVE_INFINITY;
    let dp010 = Number.NEGATIVE_INFINITY;
    for (let i = 1; i < nums.length; i++) {
        let temp000 = dp000;
        let temp001 = dp001;
        let temp010 = dp010;
        let temp011 = dp011;
        if (i === nums.length - 1) {
            dp010 = temp000 + nums[i];
            dp011 = Number.NEGATIVE_INFINITY;
        }
        else {
            dp010 = temp000 + nums[i];
            dp011 = temp001 + nums[i]
        }
        dp000 = Math.max(temp000, temp010);
        dp001 = Math.max(temp001, temp011);
    }
    return Math.max(dp000, dp001, dp010, dp011);
};

console.log(rob([1,2,3,4]))
console.log(rob([5,2,3,4]))