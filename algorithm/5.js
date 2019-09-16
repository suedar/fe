// https://leetcode-cn.com/problems/3sum-closest/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let cur = target;
    let min = Infinity;
    let minLength = Infinity;
    const length = nums.length;
    for(let i = 0; i < length - 2; i++) {
        for (let j = i + 1; j < length - 1; j++) {
            for (let k = j + 1; k < length; k ++) {
                let res = nums[i] + nums[j] + nums[k];
                if (Math.abs(res - cur) < Math.abs(minLength)) {
                    min = res;
                    minLength = res - cur;
                }
            }
        }
    }
    return min;
};
console.log(threeSumClosest([1,1,1,0], -100))