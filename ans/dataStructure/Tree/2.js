/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (root === null) {
        return 0;
    }
    if (root.left === null && root.right === null) {
        return 1;
    }
    return getDfsArr([root], [], 1, Number.MIN_SAFE_INTEGER);
};

function getDfsArr (arr, res, num, max) {
    if (arr.length === 0) {
        return max;
    }
    let childArr = [];
    let curArr = [];
    while(arr.length > 0) {
        let node = arr.shift();
        if (node.left === null && node.right === null) {
            max = Math.max(max, num);
        }
        curArr.push(node.val);
        if (node.left !== null) {
            childArr.push(node.left);
        }
        if (node.right !== null) {
            childArr.push(node.right);
        }
    }
    res.push(curArr);
    return getDfsArr(childArr, res, num + 1, max);
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
function toTree(arr) {
    if (arr.length === 0) {
        return null;
    }
    let val = arr[0] || null;
    let root = new TreeNode(val);
    if (arr.length === 1 || arr[0] === null) {
        return root;
    }
    let leftArr = [arr[1], ...arr.slice(3)];
    let rightArr = [arr[2], ...arr.slice(5)];
    root.left = (leftArr[0] === undefined || leftArr[0] === null) ? null : toTree(leftArr);
    root.right = (rightArr[0] === undefined || rightArr[0] === null) ? null : toTree(rightArr);
    return root;
}

console.log(minDepth(toTree([3,9,20,null,null,15,7])));

