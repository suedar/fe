
// https://leetcode-cn.com/problems/palindrome-linked-list/


function ListNode(val) {
    this.val = val;
    this.next = null;
}
function toNode(arr) {
    let head = new ListNode(arr[0]);
    let node = head;
    for (let i = 1; i < arr.length; i++) {
        node.next = new ListNode(arr[i]);
        node = node.next;
    }
    return head;
}

var isPalindrome = function (head) {
    if (head === null || head.next === null) {
        return true;
    }
    let odd = head;
    let even = head.next;
    while(even !== null && even.next !== null) {
        odd = odd.next;
        even = even.next.next;
    }
    let startNode = odd.next;
    let restReverseNode = reverseNode(startNode);
    while(restReverseNode !== null) {
        if (head.val !== restReverseNode.val) {
            return false;
        }
        restReverseNode = restReverseNode.next;
        head = head.next;
    }
    return true;
}

let reverseNode = function(head) {
    let pre = head;
    let node = head.next;
    let curHead = pre;
    while(node !== null) {
        let tempNode = node;
        node = node.next;
        pre.next = node;
        tempNode.next = curHead;
        curHead = tempNode;
    }
    return curHead;
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

console.log(isPalindrome(toNode([1,4,-1,-1,4,1])))
// console.log(isPalindrome(toNode([1,2,2,1])))
// console.log(isPalindrome(toNode([1,1])))
// console.log(isPalindrome(toNode([1])))
// console.log(isPalindrome(toNode([1, 2])))