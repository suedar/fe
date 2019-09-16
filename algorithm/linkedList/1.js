/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @name: 链表两数相加
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function addTwo(first, second) {
    // let minLen = Math.min(first.length, second.length);
    let maxLen = Math.max(first.length, second.length);
    let i = 0;
    let res = '';
    let more = 0;
    while(i < maxLen) {
        let curRes = parseInt(first[i] ? first[i] : 0) + parseInt(second[i] ? second[i] : 0) + more;
        more = curRes >= 10 ? 1 : 0;
        curRes %= 10;
        res += curRes;
        i++;
    }
    if (more) {
        res+=1;
    }
    return res;
}

function changeToNode(res) {
    let node = new ListNode(res[0]);
    let head = node;
    for (let i = 1; i < res.length; i++) {
        node.next = new ListNode(res[i]);
        node = node.next;
    };
    return head;
}

var addTwoNumbers = function(l1, l2) {
    let first = '';
    let sec = '';
    while(l1 !== null) {
        first += l1.val;
        l1 = l1.next;
    }
    while(l2 !== null) {
        sec += l2.val;
        l2 = l2.next;
    }
    let res = changeToNode(addTwo(first, sec));
    return res;
};

let l1 = changeToNode('5');
let l2 = changeToNode('5');
console.log(addTwoNumbers(l1, l2));