var letterCombinations = function (digits) {
    let res = [];
    if (digits.length === 0){
        return res;
    }
    // 保留结果
    useFunc(digits, 0, "", res);
    return res;
}

function findCombination() {
    const letterMap = [
        '',
        '',
        'abc',
        'def',
        'ghi',
        'jkl',
        'mno',
        'pqrs',
        'tuv',
        'wxyz'
    ]; // 静态不变量
    return function(digits, index, s, res) {
        if (index == digits.length) { // 确定结束条件
            res.push(s);
            return;
        }

        // 获得数字
        let c = digits[index];
        // 对应的字母串
        let letters = letterMap[c];

        for (let i = 0; i < letters.length; i++) { // 一次遍历，加上本次遍历结果
            useFunc(digits, index + 1, s + letters[i], res);
        }
        return ;
    }
}

let useFunc = findCombination();

console.log(letterCombinations('23'))