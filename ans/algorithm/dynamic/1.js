/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    let first = 1;
    let right = 2;
    let res;
    for (let i = 3; i <= n; i++) {
        res = first + right;
        first = right;
        right = res;
    }
    return res;
};
