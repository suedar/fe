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
var detectCycle = function(head) {
    if (head === null || head.next === null) {
        return null;
    }
    let slowNode = head.next;
    let fastNode = head.next.next;
    while(slowNode !== null && fastNode !== null && fastNode.next !== null) {
        if (slowNode === fastNode) {
            return calStart(head, slowNode);
        }
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
    }
    return null;
};

function calStart(head, slowNode) {
    while(head !== slowNode) {
        head = head.next;
        slowNode = slowNode.next;
    }
    return head;
}

