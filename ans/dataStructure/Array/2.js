/**
 * @param {number} numRows
 * @return {number[][]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) {
        return [1];
    }
    rowIndex++;
    let res = [1];
    let i = 2;
    while(i <= rowIndex) {
        let arr = new Array(i);
        arr[0] = 1;
        arr[i - 1] = 1;
        for (let j = 1; j < i - 1; j++) {
            arr[j] = res[j] + res[j - 1];
        }
        res = arr;
        i++;
    }
    return res;
};

console.log(getRow(1));