/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let arr = s.split('');
    let map = new Map();
    arr.forEach(item => {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1);
        }
        else {
            map.set(item, 1);
        }
    });
    let countSingle = false;
    let countDouble = 0;
    [...map].forEach(item => {
        countDouble += (Math.floor(item[1] / 2) * 2);
        if (item[1] % 2 === 1) {
            countSingle = true;
        }
    })
    return countDouble + (countSingle ? 1 : 0);
};
console.log(longestPalindrome('cceeec'))