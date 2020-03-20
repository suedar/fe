/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let len = digits.length;
    let curIndex = len - 1;
    let inOne = true;
    while(inOne) {
        let curCount = digits[curIndex] + 1;
        if (curCount === 10) {
            digits[curIndex] = 0;
            if (curIndex === 0) {
                digits.unshift(1);
                inOne = false;
            }
            else {
                inOne = true;
            }
        }
        else {
            digits[curIndex] = curCount;
            inOne = false;
        }
        curIndex --;
    }
    return digits;
};

console.log(plusOne([9,9,9]))
console.log(plusOne([0]))
