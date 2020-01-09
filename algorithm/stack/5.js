/**
 * https://leetcode-cn.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    const arr = x.toString().split('');
    const len = arr.length;
    if (len % 2 !== 0) {
        arr.splice(Math.floor(len / 2), 1);
    }
    return calPal(arr);
};

const calPal = function(arr) {
    let len = arr.length;
    if (len === 0) {
        return true;
    }
    if (arr[0] !== arr[len - 1]) {
        return false;
    }
    arr.pop();
    arr.shift();
    return calPal(arr);
}

console.log(isPalindrome(131));
console.log(isPalindrome(13221));