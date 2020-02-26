/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let j = 0;
    for (let i = 0; i < t.length; i++) {
        if (s[j] === t[i]) {
            j++;
        }
        if (j < s.length) {
            return 
        }
    }
    return j === s.length;
};

console.log(isSubsequence('acb', 'ahbgdc'));