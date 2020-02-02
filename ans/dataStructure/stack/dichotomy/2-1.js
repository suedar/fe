// https://leetcode-cn.com/problems/first-bad-version/

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n;
        while(left < right) {
            let mid = (right + left + 1) >>> 1;
            if (isBadVersion(mid)) {
                right = mid - 1;
            }
            else {
                left = mid;
            }
        }
        if (isBadVersion(left)) {
            return left;
        }
        return -1;
    };
};
