/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function(S) {
    let n = S.length;
    let max = n >>> 1;
    for (let i = 1; i < max; i++) {
        if (isFib(S, i)) {
            return arr;
        }
    }
    return [];
};

function isFib(arr, S) {
    let len = arr.length;
    if (len < 3) {
        return false;
    }
    let left = +arr[0];
    let right = +arr[1];
    let index = 2;
    while(index < len) {
        let cur = +arr[index++];
        if (cur !== left + right) {
            return false;
        }
        left = right;
        right = cur;
    }
    return true;
}

// console.log(splitIntoFibonacci('123456579'))
console.log(splitIntoFibonacci('11235813'))
// console.log(splitIntoFibonacci('112358130'))