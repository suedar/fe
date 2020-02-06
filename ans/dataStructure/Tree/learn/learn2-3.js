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
var isSymmetric = function(root) {
    return getBFSArr([root])
};

const getBFSArr = function(arr) {
    let len = arr.length;
    if (len === 0) {
        return true;
    }
    if (len > 0 && len !== 1) {
        if (!isMirror(arr)) {
            return false;
        }
    }
    let childArr = [];
    while(arr.length > 0) {
        let node = arr.shift();
        if (node) {
            childArr.push(node.left);
            childArr.push(node.right);
        }
    }
    return getBFSArr(childArr);
}

function isMirror(arr) {
    let mapArr = arr.map(item => item === null ? null : item.val);
    let len = mapArr.length;
    for (let i = 0; i < len; i++) {
        if (mapArr[i] !== mapArr[len - i - 1]) {
            return false;
        }
    }
    return true;
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

console.log(isSymmetric(toTree([1,2,2,null,3,null,3])));

// 6,null,null,null,null,null,null,6
