
// https://leetcode-cn.com/problems/count-and-say/
/**
 * @param {number} n
 * @return {string}
 */


function getArr (n, arr) {
    if (arr.length < n) {
        arr[n - 1] = getArr(n - 1, arr);
    }
    let str = arr[n - 1];
    let strArr = str.toString().split('');
    let preNum;
    let count = 0;
    let curArr = [];
    for (let i = 0; i < strArr.length; i++) {
        if (i === 0) {
            count ++;
            preNum = strArr[i]
        }
        else {
            if (strArr[i] === preNum) {
                count++;
            }
            else {
                curArr.push(count, preNum);
                preNum = strArr[i];
                count = 1;
            }
        }
    }
    curArr.push(count, preNum);
    return curArr.join('');
}

let countAndSave = function() {
    let arr = [0, 1];
    return function(n) {
        if (n === 1) {
            return '1';
        }
        if (n < arr.length - 1) {
            return arr[n].toString();
        }
        else {
            return getArr(n, arr).toString();
        }
    }
}


var countAndSay = n => countAndSave()(n);

// console.log(1);
console.log(countAndSay(2));
// console.log(3);
// console.log(4);