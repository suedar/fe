/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let n = cost.length;
    if (n < 2) {
        return 0;
    }
    let minTwo = Math.min(cost[0], cost[1]);
    let res = [0, 0, minTwo];
    for (let i = 2; i <= n; i++) {
        res[i] = Math.min(res[i - 1] + cost[i - 1], res[i - 2] + cost[i - 2]);
    }
    return res[n];
};

console.log(minCostClimbingStairs([10, 15]));
console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))