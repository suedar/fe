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

var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    return pushRoot(root, 0, 1);
};


function pushRoot(node, here, result) {
    here ++;
    if (node != null) {
        if (node.left === null && node.right === null) {
            result = Math.max(result, here);
        }
        if (node.left !== null) {
            result = pushRoot(node.left, here, result);
        }
        if (node.right !== null) {
            result = pushRoot(node.right, here, result);
        }
    }
    return result;
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

console.log(maxDepth(toTree([1, 2])));

