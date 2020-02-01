/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// https://leetcode-cn.com/problems/remove-element/solution/yi-chu-yuan-su-by-leetcode/
var removeElement = function(nums, val) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j++] = nums[i];
        }
    }
    return j;
};

const deleteEle = function(nums, val) {
    let i = 0;
    let n = nums.length;
    while (i < n) {
        if (nums[i] === val) {
            nums[i] = nums[n - 1];
            n--;
        }
        else {
            i++;
        }
    }
    return i;
}

// console.log(deleteEle([1, 2, 2], 2));

console.log(deleteEle([1, 2, 3, 3 ,3, 2], 3));
console.log(deleteEle([3,2,2,3], 3));
console.log(deleteEle([0,1,2,2,3,0,4,2], 2));
console.log(deleteEle([], 3));