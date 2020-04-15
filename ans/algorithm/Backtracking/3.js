/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let res = [];
    if (s.length === 0) {
        return res;
    }
    findRightArr(s, 0, '', res, 3);
    return res;
};

function findRightArr(s, start, str, res, resPoint) {
    if (resPoint < 0) {
        return;
    }
    if (start === s.length && resPoint === 0) {
        res.push(str);
        return;
    }
    for (let i = start; i < start + 3; i++) {
        // 判断本次结果是否正确 判断剩余结果是否正确
        let ip = s.slice(start, i + 1);
        let restStr = s.slice(i + 1);
        let resStrLen = restStr.length;
        let firstIp = str === '';
        if (!firstIp && resPoint === 0) {
            return;
        }
        if (Number(ip) > 255 || ip === '') {
            return;
        }
        if (Number(ip).toString().length !== ip.length) {
            return;
        }
        let curResPoint = firstIp ? resPoint : resPoint - 1;
        if (curResPoint >= 0) {
            if (resStrLen >= curResPoint * 1 && resStrLen <= curResPoint * 3) {
                findRightArr(s, i + 1, firstIp ? ip : `${str}.${ip}`, res, curResPoint);
            }
        }
    }
    return;
}

console.log(restoreIpAddresses("010010"));