/**
 * @param {number[]} bits
 * @return {boolean}
 */
// var isOneBitCharacter = function(bits) {
//     let n = bits.length;
//     if (n === 1) {
//         return bits[0] === 0;
//     }
//     if (n === 2) {
//         return bits[0] !== 1;
//     }
//     bits.pop();
//     n --;
//     let res = [[]];
//     if (bits[0] === 1) {
//         res[0][1] = 1;
//     }
//     if (bits[0] === 0) {
//         res[0][0] = 1;
//     }
//     // i步数 k表示状态 q有没有残留 res表示可达
//     for (let i = 1; i <= n; i++) {
//         res.push([[], []]);
//         for (let k = 0; k < 2; k++) {
//             for (let q = 0; q < 2; q++) {
//                 if (bits[i] === 1) {
//                     if (res[i - 1][1][1] === 1) {
//                         res[i][1][0] = 1;
//                     }
//                     if (res[i - 1][k][0] === 1) {
//                         res[i][1][1] = 1;
//                     }
//                 }
//                 else {
//                     if (res[i - 1][k][0] === 1 || res[i - 1][1][1] === 1) {
//                         res[i][0][q] = 1;
//                     }
//                 }
//             }
//         }
//     }
//     return res[n][bits[n]][0] === 1;
// };

// console.log(isOneBitCharacter([0,1,0,0]));
// // console.log(isOneBitCharacter([0]));
// // console.log(isOneBitCharacter([1, 0, 0]));
// // console.log(isOneBitCharacter([1, 1, 1, 0]));

// 解法有误

var isOneBitCharacter = function(bits) {
    let n = bits.length;
    let i = 0;
    while(i < n - 1) {
        i += bits[i] + 1;
    }
    return i === n - 1;
};

console.log(isOneBitCharacter([1, 1, 1, 0]));