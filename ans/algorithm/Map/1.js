
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map();
    let arr = [];
    let numLen = nums.length;
    let len = Math.ceil(numLen / 3);
    if (numLen === 1 || numLen === 2) {
        return [...new Set(nums)];
    }
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) === false) {
            map.set(nums[i], 1);
        }
        else {
            let mapCount = map.get(nums[i]);
            if (mapCount !== 0) {
                let plusMapCount = mapCount + 1;
                if (plusMapCount >= len) {
                    arr.push(nums[i]);
                    map.set(nums[i], 0);
                }
                else {
                    map.set(nums[i], plusMapCount);
                }
            }
        }
    }
    return arr;
};

console.log(majorityElement([1, 2, 1]));
