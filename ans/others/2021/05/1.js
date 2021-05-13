/**
 * https://leetcode-cn.com/problems/single-number/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let newNums = {};
  for (const item of nums) {
    newNums[item] = newNums[item] ? newNums[item] + 1 : 1;
  }

  for (const item in newNums) {
    if (newNums[item] === 1) {
      return Number(item);
    }
  }
};