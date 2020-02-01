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
var reverseList = function(head) {
    if (head === null) {
        return null;
    }
    let reverseHead = head;
    while(head !== null && head.next !== null) {
        let next = head.next.next;
        reverseHead = head.next;
        reverseHead.next = head;
        head.next = next;
    }
    return reverseHead;
};