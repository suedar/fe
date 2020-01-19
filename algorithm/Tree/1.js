// https://leetcode-cn.com/problems/symmetric-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root === undefined) {
        return false
    }
    return isMirror(root, root)
};

function isMirror(t1, t2) {
    if (t1 === null && t2 === null) {
        return true;
    }
    if (t1 === null || t2 === null) {
        return false
    }
    return (t1.val === t2.val) &&
        (isMirror(t1.left === t2.right)) &&
        isMirror(t1.right === t2.left)
}

// function TreeNode(val) {
//     this.value = val;
// }

// var sortedArrayToBST = function (nums) {
//     if (nums.length === 0) {
//         return null;
//     }
//     if (nums.length === 1) {
//         return new TreeNode(nums[0]);
//     }
//     var mid = parseInt(nums.length / 2);
//     var root = new TreeNode(nums[mid]);
//     root.left = sortedArrayToBST(nums.slice(0, mid));
//     root.right = sortedArrayToBST(nums.slice(mid + 1));
//     return root;
// }


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function toTree(arr) {
    if (arr.length === 0) {
        return null;
    }
    if (arr.length === 1) {
        return new TreeNode(arr[0]);
    }
    let root = new TreeNode(arr[0]);
    let length = arr.length / 2 + 1;
    root.left = toTree(arr.slice(1, length));
    root.right = toTree(arr.slice(length + 1));
    return root;
}

console.log(toTree([1, 2, 2, null, 3, null, 3]))
