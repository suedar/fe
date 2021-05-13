// https://leetcode-cn.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }
    let arr = [];
    let first = strs[0]
    let len = first.length;
    for (let i = 0; i < len; i++) {
        let flag = true;
        let letter = first[i];
        for (let q = 0; q < strs.length; q++) {
            if (letter !== strs[q][i]) {
                flag = false;
                break;
            }
        }
        if (flag === false) {
            break;
        }
        arr.push(letter)
    }
    return arr.join('')
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix([]))