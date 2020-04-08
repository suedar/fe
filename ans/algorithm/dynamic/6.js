/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let yLen = grid[0].length;
    let xLen = grid.length;
    if (xLen === 0 || yLen === 0) {
        return 0;
    }
    if (xLen === 1 && yLen === 1) {
        return grid[0][0];
    }
    // console.log(xLen, yLen)
    let arr = [];
    for (let i = 0; i < xLen; i++) {
        arr[i] = [];
        for (let j = 0; j < yLen; j++) {
            let left;
            let top;
            if (i === 0) {
                if (j === 1) {
                    left = 0;
                }
                else {
                    left = Number.MAX_SAFE_INTEGER;
                }
            }
            else {
                left = arr[i - 1][j];
            }

            if (j === 0) {
                if (i === 1) {
                    top = 0;
                }
                else {
                    top = Number.MAX_SAFE_INTEGER;
                }
            }
            else {
                top = arr[i][j - 1];
            }
            let leftNum = i === 0 ? 0 : grid[i - 1][j];
            let topNum = j === 0 ? 0 : grid[i][j - 1];
            arr[i][j] = Math.min(left + leftNum, top + topNum);
            // console.log(left, leftNum, top, topNum, i, j, arr[i][j])
        }
    }
    return arr[xLen - 1][yLen - 1] + grid[0][0] + grid[xLen - 1][yLen - 1];
};
console.log(minPathSum([
    [1],
    [1],
]))


// [
//     [1,3,1],
//     [1,5,1],
//     [4,2,1]
// ]