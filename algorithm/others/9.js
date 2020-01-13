// https://leetcode-cn.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */


var romanToInt = function(s) {
    if (s.length === 0) {
        return 0;
    }
    let res = 0;
    while(s.match(/IV|IX|XL|XC|CD|CM/)) {
        let i = s.match(/IV|IX|XL|XC|CD|CM/).index;
        res += twoMap.get(s.slice(i, i + 2));
        s = Array.prototype.concat(s.slice(0, i), s.slice(i + 2)).join('');
    }
    let restArr = s.split('');
    restArr.forEach(item => {
        res += map.get(item);
    })
    return res;
};

const twoMap = new Map([
    ['IV', 4],
    ['IX', 9],
    ['XL', 40],
    ['XC', 90],
    ['CD', 400],
    ['CM', 900]
]);

const map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
]);

// console.log(romanToInt('III'))
// console.log(romanToInt('IV'))
// console.log(romanToInt('IX'))
console.log(romanToInt('MDCCCLXXXIV'))