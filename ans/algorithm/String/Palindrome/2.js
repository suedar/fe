/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let sLen = s.length;
    if (sLen === 0) {
        return '';
    }
    if (sLen === 1) {
        return s;
    }
    if (sLen === 2) {
        if (s[0] === s[1]) {
            return s;
        }
        return s[0];
    }
    let leftArr = [s[0], s[1]];
    let maxArr = [];
    if (s[0] === s[1]) {
        maxArr = [...leftArr];
    }
    for (let i = 2; i < sLen; i++) {
        let deNum = 1;
        let tempArr = [];
        if (s[i] === leftArr[i - 2]) {
            tempArr = [s[i], leftArr[i - 1], s[i]];
            deNum = 2;
            tempArr = getMaxArr(i, deNum, tempArr, sLen, s, leftArr);
            maxArr = tempArr.length > maxArr.length ? tempArr : maxArr;
        }
        if (s[i] === leftArr[i - 1]) {
            tempArr = [s[i], s[i]];
            deNum = 1;
            tempArr = getMaxArr(i, deNum, tempArr, sLen, s, leftArr);
            maxArr = tempArr.length > maxArr.length ? tempArr : maxArr;
        }
        leftArr.push(s[i]);
    }
    return maxArr.length > 0 ? maxArr.join('') : s[0];
};

function getMaxArr(i, deNum, tempArr, sLen, s, leftArr) {
    let flag = true;
    let j = i + 1;
    deNum ++;
    while(j - deNum > 0 && flag && j < sLen) {
        if (s[j] === leftArr[leftArr.length - deNum]) {
            tempArr.unshift(s[j]);
            tempArr.push(s[j]);
        }
        else {
            flag = false;
        }
        j++;
        deNum++;
    }
    return tempArr;
}

console.log(longestPalindrome("abcda"))
// console.log(longestPalindrome('aaaa'))