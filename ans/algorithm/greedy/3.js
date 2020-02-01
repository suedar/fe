/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     let minPre = Number.MAX_SAFE_INTEGER;
//     let maxProfit = 0;
//     prices.forEach((item, index) => {
//         maxProfit = Math.max(maxProfit, item - minPre);
//         minPre = Math.min(minPre, item);
//     })
//     return maxProfit;
// };

// console.log(maxProfit([7,6,4,3,1]));

// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/

// var maxProfit1 = function(prices) {
//     let maxProfit = 0;
//     for (let i = 1; i < prices.length; i++) {
//         let forToday = prices[i] - prices[i - 1];
//         if (forToday > 0) {
//             maxProfit += forToday;
//         }
//     }
//     return maxProfit;
// };

// console.log(maxProfit([7,1,5,3,6,4]));

// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/

// var maxProfit2 = function(prices) {
//     let maxProfit = 0;
//     for (let i = 1; i < prices.length; i++) {
//         let forToday = prices[i] - prices[i - 1];
//         if (forToday > 0) {
//             maxProfit += forToday;
//         }
//     }
//     return maxProfit;
// };

// console.log(maxProfit2([7,1,5,3,6,4]));

// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/solution/yi-ge-tong-yong-fang-fa-tuan-mie-6-dao-gu-piao-wen/

// 枚举后的状态转移方程
// base case：
// dp[-1][k][0] = dp[i][0][0] = 0
// dp[-1][k][1] = dp[i][0][1] = -infinity

// 状态转移方程：
// dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
// dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])

// int max_k = 2;
// int[][][] dp = new int[n][max_k + 1][2];
// for (int i = 0; i < n; i++) {
//     for (int k = max_k; k >= 1; k--) {
//         if (i - 1 == -1) { /*处理 base case */ }
//         dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i]);
//         dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i]);
//     }
// }
// // 穷举了 n × max_k × 2 个状态，正确。
// return dp[n - 1][max_k][0];


// var maxProfit3 = function(prices) {
//     let maxK = 2;
//     let dp = [];
//     let n = prices.length
//     if (n === 0) {
//         return 0;
//     }
//     for (let i = 0; i < n; i++) {
//         dp.push([[0], [], []]);
//         for (let k = 2; k >= 1; k--) {
//             if (i === 0) {
//                 dp[i][k][0] = 0;
//                 dp[i][k][1] = - prices[i];
//             }
//             else {
//                 dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i]);
//                 dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i]);
//             }
//         }
//     }
//     return dp[n - 1][maxK][0];
// }


// 内存消耗过大 提取变量
// var maxProfit3 = function(k, prices) {
//     let maxK = k;
//     let n = prices.length
//     if (n === 0) {
//         return 0;
//     }
//     let curHas = 0;
//     let curNotHas = 0;
//     let lastHas = - prices[0];
//     let lastNotHas = 0;
//     for (let i = 0; i < n; i++) {
//         for (let k = maxK; k >= 1; k--) {
//             // if (i === 0) {
//             //     dp[i][k][0] = 0;
//             //     dp[i][k][1] = - prices[i];
//             // }
//             // else {
//             //     dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i]);
//             //     dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i]);
//             // }
//             curNotHas = Math.max(lastNotHas, lastHas + prices[i]);
//             curHas = Math.max(lastHas, lastNotHas - prices[i]);
//             lastHas = curHas;
//             lastNotHas = curNotHas;
//         }
//     }
//     return curNotHas;
// }


// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/

// k 为无穷的情况
// var maxProfit3 = function(prices) {
//     let curNotHas = 0, curHas = Number.MIN_SAFE_INTEGER;
//     prices.forEach(item => {
//         let temp = curNotHas;
//         curNotHas = Math.max(temp, curHas + item);
//         curHas = Math.max(curHas, temp - item);
//     })
//     return curNotHas;
// }


// var maxProfit = function(kNumber, prices) {
//     let maxK = kNumber;
//     let dp = [];
//     let n = prices.length
//     if (n === 0) {
//         return 0;
//     }
//     if (kNumber > n / 2) {
//         return maxProfit3(prices);
//     }
//     let arr = [[0]];
//     for (let i = 1; i <= maxK; i++) {
//         arr.push([]);
//     }
//     for (let i = 0; i < n; i++) {
//         dp.push(arr);
//         for (let k = maxK; k >= 1; k--) {
//             if (i === 0) {
//                 dp[i][k][0] = 0;
//                 dp[i][k][1] = - prices[i];
//             }
//             else {
//                 dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i]);
//                 dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i]);
//             }
//         }
//     }
//     return dp[n - 1][maxK][0];
// }



// console.log(maxProfit(2, [3,3,5,0,0,3,1,4]))
// console.log(maxProfit(2, [2,4,1]))

// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
// 买卖with冷冻期
var maxProfit = function(prices) {
    let dp = [];
    dp[-1] = [];
    let n = prices.length
    if (n === 0) {
        return 0;
    }
    for (let i = 0; i < n; i++) {
        dp.push([])
        if (i === 0) {
            dp[-1][0] = 0;
            dp[-1][1] = Number.MIN_SAFE_INTEGER;
            dp[i][0] = 0;
            dp[i][1] = - prices[i];
        }
        else {
            dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
            dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]);
        }
    }
    return dp[n - 1][0];
}

console.log(maxProfit([1,2,3,0,2]));
// console.log(maxProfit([1,2,3,0,2]));