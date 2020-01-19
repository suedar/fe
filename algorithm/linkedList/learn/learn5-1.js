// https://leetcode-cn.com/problems/flatten-a-multilevel-doubly-linked-list/

function Node(val = null, prev = null, next = null, child = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
    this.child = child;
};

var flatten = function(head) {
    let node = head;
    while(node !== null) {
        if (node.child !== null) {
            let childHeadNode = flatten(node.child);
            let childFootNode = childHeadNode;
            while(childFootNode !== null && childFootNode.next !== null) {
                childFootNode = childFootNode.next;
            }
            childHeadNode.prev = node;
            childFootNode.next = node.next;
            let nextNode = node.next;
            node.next = childHeadNode;
            if (nextNode) {
                nextNode.prev = childFootNode;
            }
            node.child = null;
        }
        node = node.next;
    }
    return head;
};

function toNode(arr) {
    let head = new Node(arr[0]);
    let node = head;
    for (let i = 1; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            node.child = toNode(arr[i]);
        } else {
            node.next = new Node(arr[i]);
        }
        node = node.next;
    }
    return head;
}


console.log(flatten(toNode([])));