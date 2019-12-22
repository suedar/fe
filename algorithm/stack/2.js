// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) {
        return 0;
    }
    let i = 0;
    let maxLen = 1;
    let arr = [];
    for (let j = 0; j < s.length; j++) {
        if (arr.includes(s[j])) {
            maxLen = maxLen < arr.length ? arr.length : maxLen;
            arr = arr.slice(arr.findIndex(item => item === s[j]) + 1);
        }
        arr.push(s[j]);
    }
    maxLen = maxLen < arr.length ? arr.length : maxLen;
    return maxLen;
};

console.log(lengthOfLongestSubstring('asdddxxxxxxasdw'));
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('nnnnnnnnn'));
console.log(lengthOfLongestSubstring('pwwkew'));
