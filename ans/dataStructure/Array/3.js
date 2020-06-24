/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = /1-9a-zA-Z/ig.exec(s);
    console.log(str);
};
console.log(isPalindrome('A man, a plan, a canal: Panama'));

// "A man, a plan, a canal: Panama"