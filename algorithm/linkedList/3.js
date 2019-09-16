/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var mergeTwoLists = function(l1, l2) {
    if(l1 === null) {
        return l2;
    }
    if(l2 === null) {
        return l1;
    }
    let firArr = toArr(l1);
    let secArr = toArr(l2);
    let sortArr = [...firArr, ...secArr].sort((a, b) => a - b);
    if (sortArr.length === 0 || sortArr[0] === undefined) {
        return [];
    }
    let res = toNodo(sortArr);
    return res;
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

function toArr(node) {
    let arr = [];
    if (node === undefined || node === null || node.val === undefined) {
        return arr;
    }
    while(node !== null) {
        arr.push(node.val);
        node = node.next;
    }
    return arr;
}

let l1 = toNodo('124');
let l2 = toNodo('134');
console.log(mergeTwoLists(l1, l2))