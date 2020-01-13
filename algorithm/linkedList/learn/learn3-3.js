

// https://leetcode-cn.com/problems/odd-even-linked-list/

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

var oddEvenList = function(head) {
    if (head.next === null || head.next.next === null) {
        return head;
    }
    let evenHead = head.next;
    let even = evenHead;
    head.next = head.next.next;
    let odd = head.next;
    while(odd !== null && odd.next !== null) {
        even.next = odd.next;
        even = even.next;
        odd.next = even.next;
        node = node.next;
    }
    node.next = evenHead;
    return head;
};

var oddEvenList1 = function(head) {
    if (head === null || head.next === null || head.next.next === null) {
        return head;
    }
    let odd = head;
    let evenHead = head.next;
    let even = evenHead;
    while(even !== null && even.next !== null) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
};

console.log(oddEvenList1(toNode([1,2,3,4,5,6,7,8])))