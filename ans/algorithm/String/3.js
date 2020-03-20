
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (s.length === 0) {
        return 0;
    }
    let res = /(\w+(\b|\s)*)$/.exec(s);
    if (res !== null) {
        res = /\b\w*\b/.exec(res[0])[0];
    }
    return res === null ? 0 : res.length;
};

console.log(lengthOfLastWord(' '));