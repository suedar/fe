/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 本题中，一棵高度平衡二叉树定义为：
// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
};


function toTree(arr) {
    if (arr.length === 0) {
        return null;
    }
    let root = new TreeNode(arr.shift());
    let childArr = [root];
    let node = root;
    while(arr.length > 0 && node) {
        let tempArr = [];
        while(childArr.length > 0 && node) {
            node = childArr.shift();
            if (node.val !== null) {
                node.left = new TreeNode(arr.shift());
                tempArr.push(node.left);
                node.right = new TreeNode(arr.shift());
                tempArr.push(node.right);
            }
        }
        childArr = tempArr;
    }
    return root;
}