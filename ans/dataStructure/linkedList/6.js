/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var deleteDuplicates = function(head) {
    let node = head;
    let arr = [];
    let preHead = new ListNode(null);
    let preNode = preHead;
    if (head === null) {
        return null;
    }
    while(node !== null) {
        // console.log(arr.find(item => item.val === node.val))
        if (arr.find(item => item === node.val) !== undefined) {
            preNode.next = node.next;
        }
        else {
            arr.push(node.val);
            preNode.next = node;
            preNode = preNode.next;
        }
        node = node.next;
    }
    return preHead.next;
};

function toNodo(str) {
    let head = new ListNode(str[0]);
    let node = head;
    for (let i = 1; i < str.length; i++) {
        node.next = new ListNode(str[i]);
        node = node.next;
    }
    return head;
}

console.log(deleteDuplicates(toNodo([1, 2, 1])))
console.log(deleteDuplicates(toNodo([1, 1])))
console.log(deleteDuplicates(toNodo([])))