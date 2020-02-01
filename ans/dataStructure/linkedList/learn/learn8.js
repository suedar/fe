// https://leetcode-cn.com/explore/learn/card/linked-list/195/classic-problems/752/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (head === null) {
        return null;
    }
    let curHead = head;
    let shouldMoveHead = true;
    while(head !== null) {
        if (shouldMoveHead) {
            if (head.val === val) {
                head = curHead = head.next;
            }
            else {
                shouldMoveHead = false;
            }
        }
        else {
            if (head && head.next && head.next.val !== val || head && head.next === null) {
                head = head.next;
            }
        }
        if (head && head.next && head.next.val === val) {
            head.next = head.next.next;
        }
    }
    if (curHead && curHead.next === null && curHead.val === val) {
        return null;
    }
    return curHead;
};


function toNode(arr) {
    let node = new ListNode(arr[0]);
    let head = node;
    for (let i = 1; i < arr.length; i++) {
        node.next = new ListNode(arr[i]);
        node = node.next;
    }
    return head;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

// console.log(removeElements(toNode([1,1,2,2,2]), 1))
console.log(removeElements(toNode([1]), 1))
console.log(removeElements(toNode([1,2,1]), 1))
// console.log(removeElements(toNode([1,1,1]), 2))