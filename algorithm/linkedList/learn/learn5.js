/**
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
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
var removeNthFromEnd = function(head, n) {
    let p1 = head;
    let p2 = head;
    for (let i = 0; i <= n; i++) {
        if (p2 === null) {
            return p1.next;
        }
        p2 = p2.next;
    }
    while(p2 !== null) {
        p2 = p2.next;
        p1 = p1.next;
    }
    p1.next = p1.next.next;
    return head;
};