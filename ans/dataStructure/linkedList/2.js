/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @name: 删除倒数第几个节点
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */


function ListNode(val) {
    this.val = val;
    this.next = null;
}
var removeNthFromEnd = function(head, n) {
    let length = getLen(head);
    let delIndex = length - n;
    let i = 0;
    let node = head;
    if (delIndex === 0) {
        return head.next;
    }
    if (n === 1) {
        while(i < length) {
            if (i === length - 2) {
                node.next = null;
                return head;
            }
            node = node.next;
            i++;
        }
    }
    while(i < length) {
        if (i === delIndex - 1) {
            node.next = node.next.next;
            break;
        }
        node = node.next;
        i++;
    }
    return head;
};

function toNode(res) {
    let node = new ListNode(res[0]);
    let head = node;
    for (let i = 1; i < res.length; i++) {
        node.next = new ListNode(res[i]);
        node = node.next;
    }
    return head;
}

function getLen(node) {
    let length = 0;
    while(node !== null) {
        length ++;
        node = node.next;
    }
    return length;
}

let node = toNode('123');
let res = removeNthFromEnd(node, 3);
console.log(res)
// console.log(res.next)
// console.log(res);
// console.log(res.next)