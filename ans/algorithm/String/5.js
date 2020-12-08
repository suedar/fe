/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    // >= 5 一个0 整数10 一个0
    let res = 0;
    while(n >= 5) {
        res += Math.floor(n / 5);
        n = n / 5;
    }
    return res;
};

console.log(trailingZeroes(30))
console.log(trailingZeroes(5))
console.log(trailingZeroes(6))
console.log(trailingZeroes(15))
console.log(trailingZeroes(13))
console.log(trailingZeroes(0))