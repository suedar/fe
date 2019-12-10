// https://leetcode-cn.com/problems/reverse-integer/
// 整数反转

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x < -(2 ** 31) || x > (2 ** 31 - 1)) {
        return 0
    }
    const prefix = x < 0 ? '-' : '';
    const res = [prefix, ...Math.abs(x).toString().split('').reverse()].join('');
    return res;
};

console.log(reverse(1534236469))