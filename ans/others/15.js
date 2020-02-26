/**
 * @param {number} N
 * @return {number}
 */
var fib = function(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    let left = 0;
    let right = 1;
    let res;
    for (let i = 2; i <= n; i++) {
        res = left + right;
        left = right;
        right = res;
    }
    return res;
};

console.log(fib(2))
console.log(fib(3))