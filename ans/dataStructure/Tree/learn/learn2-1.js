/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) {
        return [];
    }
    return getDfsArr([root], []);
};

function getDfsArr (arr, res) {
    if (arr.length === 0) {
        return res;
    }
    let childArr = [];
    let curArr = [];
    while(arr.length > 0) {
        let node = arr.shift();
        if (node.val !== null) {
            curArr.push(node.val);
        }
        if (node.left !== null) {
            childArr.push(node.left);
        }
        if (node.right !== null) {
            childArr.push(node.right);
        }
    }
    res.push(curArr);
    return getDfsArr(childArr, res);
}

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
    if (arr[0] === null) {
        return root;
    }
    // let length = Math.floor(arr.length / 2) + 1;
    // let temparr = arr.slice(1, length);
    // if (temparr[0] === null) {
    //     length = 2;
    // }
    // console.log(length)
    // console.log([arr[2], ...arr.slice(4)])
    root.left = toTree([arr[1], ...arr.slice(3)]);
    root.right = toTree([arr[2], ...arr.slice(5)]);
    return root;
}

console.log(levelOrder(toTree([3,9,20,null,null,15,7])));