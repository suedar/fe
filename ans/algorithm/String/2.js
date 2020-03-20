/**
 * @param {string} s
 * @return {boolean}
 */
// /^(\w+)\1+$/
var repeatedSubstringPattern = function(s) {
    let reg = /^(\w+)\1+$/;
    return reg.test(s);
};
console.log(repeatedSubstringPattern(''))
console.log(repeatedSubstringPattern('aaaa'))
console.log(repeatedSubstringPattern('acacac'))