// https://leetcode-cn.com/problems/longest-increasing-subsequence/

const lengthOfLIS = function (nums) {
    let maxLen = 0;
    let len = nums.length;
    let arr = [];
    for (let i = 0; i < len - 1; i++) {
        // let startVal = nums[i];
        arr = [num[i]];
        for (let j = 1; j < len; j++) {
            for (let k = j; k < len; k++) {
                if (arr[arr.length] < arr[k]) {
                    arr.push(arr[k]);
                    len = arr.length > len ? arr.length : len;
                }
            }
        }
    }
}