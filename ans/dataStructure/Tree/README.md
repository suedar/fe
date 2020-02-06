# 二叉树

前序遍历：DLR
中序遍历：LDR
后序遍历：LRD

## 递归解法

``` js
    var preorderTraversal = function(root) {
        var result = [];
        function pushRoot(node) {
            if (node != null) {
                result.push(node.val);
                if (node.left != null) {
                    pushRoot(node.left);
                }
                if (node.right != null) {
                    pushRoot(node.right);
                }
            }
        }
        pushRoot(root);
        return result;
    };
```

## 栈解法

``` js
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
```