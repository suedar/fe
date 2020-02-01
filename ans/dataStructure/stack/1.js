/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let left = new Set(['{', '[', '(']);
    for (let i = 0; i < s.length; i++) {
        if (left.has(s[i])) {
            stack.push(s[i]);
        }
        else {
            if (i === 0) {
                return false;
            }
            let length = stack.length;
            if (stack[length - 1] === '{' && s[i] === '}'
                || stack[length - 1] === '[' && s[i] === ']'
                || stack[length - 1] === '(' && s[i] === ')') {
                    stack.pop();
                }
            else {
                return false;
            }
        }
    }
    if (stack.length === 0) {
        return true;
    }
    return false;
};
console.log(isValid('()()'))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
console.log(isValid('{[]}'))