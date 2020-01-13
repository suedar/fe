
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

}