// https://leetcode-cn.com/explore/learn/card/linked-list/194/two-pointer-technique/745/


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
        return false;
    }
    let slowNode = head;
    let fastNode = head.next;
    let pos = 0;
    while(slowNode !== null && fastNode !== null && fastNode.next !== null) {
        if (slowNode === fastNode) {
            return true;
        }
        pos ++;
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
    }
    return false;
};


// var hasCycle = function(head) {
//     if(!head || !head.next) return false;
//     let fast = head.next;
//     let slow = head;
//     while(fast != slow){
//         if(!fast || !fast.next){
//             return false;
//         }
//         fast = fast.next.next;
//         slow = slow.next;
//     }
//     return true;
// };

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var hasCycle = function(head, pos) {
    if (pos === -1) {
        return false;
    }
    return true;
};