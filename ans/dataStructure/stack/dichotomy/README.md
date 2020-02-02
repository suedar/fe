1. 二分

> 模板 #1
> https://leetcode-cn.com/problems/search-insert-position/solution/te-bie-hao-yong-de-er-fen-cha-fa-fa-mo-ban-python-/

``` js
function dichotomy(nums, target) {
    let len = nums.length;
    let left = 0;
    let right = len - 1;
    while(left < right) {
        let mid = (right + left + 1) >>> 1;
        if (nums[mid] > target) {
            right = mid - 1;
        }
        else {
            left = mid;
        }
    }
    if (nums[left] === target) {
        return left;
    }
    return -1;
}
```