/*
 * @file: 
 * @author: sunchao(sunchao15@baidu.com)
 * @Date: 2019-08-10 17:43:16
 * @LastEditors: sunchao
 * @LastEditTime: 2019-08-10 17:43:16
 */
// 无重复字符的最长子串

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let n = s.length;
    let newSet = new Set();
    let res = 0;
    let i = 0;
    let j = 0;
    while (i < n && j < n) {
        if (newSet.has(s[j])) {
            res = Math.max(res, j - i);
            i++;
            j = i;
            newSet.clear();
            // newSet.add(s[j], j++);
        } else {
            res = Math.max(res, j - i + 1)
            newSet.add(s[j], j++);
            // newSet.clear
        }
    }
    return res;
};

const subDup = function(originArr, curArr, length, curI = 0, max = 1) {
    let newItem = originArr[curI];
    if (curArr.includes(newItem)) {
        let curLength = curArr.length;
        console.log(curLength)
        return curLength > max ? curLength : max;
    } else {
        curArr.push(originArr[curI]);
        curI++;
        if (curI === length) {
            let curLength = curArr.length - 1;
            return curLength > max ? curLength : max;
        }
        subDup(originArr, curArr, length, curI, max)
    }
}