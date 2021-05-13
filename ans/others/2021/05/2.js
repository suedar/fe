// https://leetcode-cn.com/problems/excel-sheet-column-title/

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  const charMap = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let res = [];
  let rest = columnNumber;
  while (rest !== 0) {
    const divided = rest % 26;
    const isAll = divided === 0;
    res.unshift(isAll ? 'Z' : charMap[divided - 1]);
    rest = Math.floor(isAll ? (rest / 26 - 1) : rest / 26);
    console.log(rest)
  }
  return res.join('');
};
