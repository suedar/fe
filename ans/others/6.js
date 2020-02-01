/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 定义链表
function ListNode(val) {
    this.val = val;
    this,next = null;
}
var removeNthFromEnd = function(head, n) {
    let length = 1;
    let node = head.next;
    while(node !== null) {
        length ++;
        node = node.next;
    }
    
};