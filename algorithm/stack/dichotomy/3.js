
// https://leetcode-cn.com/problems/sqrtx/
var mySqrt = function(x) {
    let left = 0;
    let right = x;
    while (left < right) {
        let mid = (left + right + 1) >>> 1;
        if (mid ** 2 > x) {
            right = mid - 1;
        } else {
            left = mid;
        }
    }
    return left;
};

console.log(mySqrt(5))
console.log(mySqrt(0))
console.log(mySqrt(2))