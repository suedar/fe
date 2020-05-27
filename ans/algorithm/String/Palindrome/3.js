/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let origin = s.replace(/[^0-9a-zA-Z]/ig, '').toLowerCase();
    let sLen = origin.length;
    if (origin === '') return true;
    if (sLen <= 1) {
        return true;
    }
    let isRound = sLen % 2 === 0;
    let midNum = isRound ? sLen >> 1 : sLen >> 1 - 1;
    for (let i = midNum; i--; i >= 0) {
        if (origin[sLen - i - 1] !== origin[i]) {
            return false;
        }
    }
    return true;
};


console.log(isPalindrome(' '))