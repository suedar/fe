/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set = new Set(nums1);
    let arr = [];
    nums2.forEach(item => {
        if (set.has(item)) {
            arr.push(item);
        }
    })
    return arr;
};

console.log(intersection([1,2,2,1], [2]))