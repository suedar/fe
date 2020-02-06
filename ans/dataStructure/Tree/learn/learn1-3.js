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
var postorderTraversal = function(root) {
    let res = [];
    let stack = [];
    let curr = root;
    while(stack.length > 0 || curr){
        while(curr){
            stack.push(curr);
            res.unshift(curr.val);
            curr = curr.right;
        }
        let node = stack.pop();
        curr = node.left;
    }
    return res;
};

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
