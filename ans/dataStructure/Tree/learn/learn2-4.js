/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (root === null) {
        return sum === 0 ? true : false;
    }
    let stack = [[root, root.val]];
    return getBfsArr(stack, sum, 1)
};

function getBfsArr (stack, sum, count) {
    let childArr = [];
    if (stack.length === 0 && count === 0) {
        return false;
    }
    while(stack.length > 0) {
        let nodeArr = stack.shift();
        count --;
        let node = nodeArr[0];
        let curCount = nodeArr[1] + node.val;
        if (node.left === null && node.right === null) {
            if (sum === curCount) {
                return true;
            }
        }
        if (node.left !== null) {
            childArr.push([node.left, curCount]);
            count++;
        }
        if (node.right !== null) {
            childArr.push([node.right, curCount]);
            count++;
        }
    }
    return getBfsArr(childArr, sum, count);
}


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
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

console.log(hasPathSum(toTree([5,4,8,11,null,13,4,7,2,null,null,null,1]), 22));