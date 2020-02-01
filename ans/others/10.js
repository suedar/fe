// https://leetcode-cn.com/problems/reverse-integer/


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let preFix = x < 0 ? '-' : '';
    let num = parseInt([preFix, ...x.toString().split('').reverse()].join(''), 10);
    if (num < -Math.pow(2, 31) || (num > Math.pow(2, 31) - 1)) {
        return 0;
    }
    return num;
};

console.log(reverse(1534236469))