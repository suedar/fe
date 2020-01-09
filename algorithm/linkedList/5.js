/**
 * https://leetcode-cn.com/problems/palindrome-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */


var isPalindrome = function(head) {
    if(head === null) {
        return true;
    }
    const arr = toArr(head);
    const len = arr.length;
    if (len % 2 !== 0) {
        arr.splice(Math.floor(len / 2), 1);
    }
    return calPal(arr);
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const calPal = function(arr) {
    let len = arr.length;
    if (len === 0) {
        return true;
    }
    if (arr[0] !== arr[len - 1]) {
        return false;
    }
    arr.pop();
    arr.shift();
    return calPal(arr);
}

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

let l1 = toNodo('12421');
let l2 = toNodo('134');
let l3 = toNodo('');
console.log(isPalindrome(l1))
console.log(isPalindrome(l2))
console.log(isPalindrome(l3))