
function getMin(s) {
    // Write your code here
    let arr = s.split('');
    for (let i = 0, j = s.length - 1; i < s.length, i < j; i++) {
        console.log(arr, 'cxccc')
        if (s[i] === '(' && s[j] === ')') {
            arr.splice(i - 1, 1);
            arr.splice(j - 1, 1);
            j--;
        }
        console.log(arr, 'test', i, j)
    }
    console.log(arr);
    return arr.length;

}

getMin('(()))')