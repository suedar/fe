// https://leetcode-cn.com/problems/container-with-most-water/

/**
 * 倒水
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const length = height.length;
    let res = 0;
    for (let i = 0; i < length - 1; i ++) {
        for (let j = i + 1; j < length; j++) {
            let area = (j - i) * Math.min(height[i], height[j]);
            res = Math.max(area, res);
        }
    }
    return res;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))