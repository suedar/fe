// const nums = [0,0,1,1,1,2,2,3,3,4];
// const a = [1, 2, 3, 4, 5];
// a.splice(1, 1);
// console.log(a[1])

var removeDuplicates = function(nums) {
    let len = nums.length;
    let i = 1;
    while (len --) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i ,1);
        }
        else {
            i++;
        }
    }
    return nums.length;
};

console.log(removeDuplicates([1,1,1,1]))
console.log(removeDuplicates([]))
console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))