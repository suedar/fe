/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
    let kArr = K.toString().split('');
    kArr = kArr.map(item => Number(item));
    let aLen = A.length;
    let kLen = kArr.length;
    let addOne = 0;
    let isABig = aLen > kLen;
    let bigArr = isABig ? A : kArr;
    let smallArr = isABig ? kArr : A;
    let bigLen = isABig ? aLen : kLen;
    let smallLen = isABig ? kLen : aLen;
    let i = 0;
    let curSmallIndex = smallLen - i - 1;
    while (curSmallIndex >= 0 || addOne) {
        let curSmallItem = curSmallIndex < 0 ? 0 : smallArr[curSmallIndex];
        let curItem = bigArr[bigLen - i - 1] + curSmallItem + addOne;
        if (curItem >= 10) {
            if (bigLen - i - 1 === 0) {
                bigArr.unshift(1);
                bigLen++;
                addOne = 0;
            } else {
                addOne = 1;
            }
            curItem -= 10;
        } else {
            addOne = 0;
        }
        bigArr[bigLen - i++ - 1] = curItem;
        curSmallIndex = smallLen - i - 1
    }
    return bigArr;
};

// console.log(addToArrayForm([9,9,9,9,9,9,9,9,9,9], 1))
// console.log(addToArrayForm([2,1,5], 806))

var addToArrayForm = function (A, K) {
    let len = A.length
    let k = K

    while (len-- && k > 0) {
        let sum = A[len] + k
        A[len] = sum % 10

        k = Math.floor(sum / 10)
    }
    if (len < 0 && k > 0) {
        return String(k).split('').map(item => parseInt(item)).concat(A)
    } else {
        return A
    }

};