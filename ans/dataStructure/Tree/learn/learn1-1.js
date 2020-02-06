

var preorderTraversal = function(root) {
    let res = [];
    let stack = [];
    let curr = root;
    while(stack.length > 0 || curr) {
        while(curr) {
            res.push(curr.val);
            stack.push(curr);
            curr = curr.left;
        }
        let node = stack.pop();
        curr = node.right;
    }
    return res;
};