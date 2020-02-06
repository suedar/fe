/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = [];
    let stack = [];
    let node = root;
    while(stack.length > 0 || node) {
        while(node) {
            stack.push(node);
            node = node.left;
        }
        let temp = stack.pop();
        res.push(temp.val);
        node = temp.right;
    }
    return res;
};

// console.log(inorderTraversal([1,null,2,3]))

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
    let temparr = arr.slice(1, length);
    if (temparr[0] === null) {
        length = 2;
    }
    root.left = toTree(arr.slice(1, length));
    root.right = toTree(arr.slice(length));
    return root;
}

console.log(inorderTraversal(toTree([1,null,2,3])));