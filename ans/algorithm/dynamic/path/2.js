/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let n = obstacleGrid[0].length;
    let m = obstacleGrid.length;
    if (m === 0 || n === 0) {
        return 0;
    }
    if (m === 1 && n === 1) {
        return obstacleGrid[0][0] === 1 ? 0 : 1;
    }
    if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) {
        return 0;
    }
    let arr = [];
    for (let i = 0; i < m; i++) {
        arr[i] = [];
        for (let j = 0; j < n; j++) {
            let left;
            let top;
            if (i === 0 && j === 0) {
                arr[0] = [0];
            }
            if (i === 0) {
                left = 0;
            }
            else {
                if (obstacleGrid[i - 1][j] === 1) {
                    left = 0
                }
                else {
                    left = arr[i - 1][j];
                }
            }
            if (j === 0) {
                top = 0;
            }
            else {
                if (obstacleGrid[i][j - 1] === 1) {
                    top = 0
                }
                else {
                    top = arr[i][j - 1];
                }
            }
            if (i === 1 && j === 0 || i === 0 && j === 1) {
                arr[i][j] = obstacleGrid[i][j] === 1 ? 0 : 1;
            }
            else {
                arr[i][j] = left + top;
            }
        }
    }
    return arr[m - 1][n - 1];
};

console.log(uniquePathsWithObstacles([[1, 0]]))