/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let inOne = 0;
    let aArr = a.toString().split('').reverse();
    let bArr = b.toString().split('').reverse();
    let aArrLen = aArr.length;
    let bArrLen = bArr.length;
    let aBig = aArrLen > bArrLen;
    let bigArr = aBig ? aArr : bArr;
    let smallArr = aBig ? bArr : aArr;
    let res = [];
    let beMax = false;
    bigArr.forEach((item, index) => {
        if (smallArr[index] === undefined) {
            beMax = true;
        }
        res[index] = parseInt(item, 10) + inOne + parseInt((beMax ? 0 : smallArr[index]), 10);
        if (res[index] > 1) {
            res[index] = res[index] % 2;
            inOne = 1;
        }
        else {
            inOne = 0;
        }
    })
    if (inOne === 1) {
        res.push(1);
    }
    return res.reverse().join('');
};

console.log(addBinary(1111, 1111))
// console.log(addBinary(0, 1))
// console.log(addBinary(0, 0))