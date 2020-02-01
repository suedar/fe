/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    // this.val = null;
    this.head = null;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let _index = 0;
    let head = this.head;
    while (_index < index || head === null) {
        head = head.next;
        if (_index === index) {
            return head.val;
        }
    }
    if(_index !== index) {
        return -1;
    }
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new ListNode(val);
    let head = this.head;
    this.head = node;
    if (head !== null) {
        this.head.next = head;
    }
    return this.head;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = new ListNode(val);
    let head = this.head;
    let pre;
    while(head.next !== null) {
        head = head.next;
    }
    head.next = node;
    return this.head;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index <= 0) {
        return this.addAtHead(val);
    }
    let _index = 0;
    let head = this.head;
    let node = new ListNode(val);
    while (_index < index || head === null) {
        if (_index === index - 1) {
            let nextNode = head.next;
            node.next = nextNode;
            head.next = node;
            return this.head;
        }
        head = head.next;
        _index ++;
    }
    return -1;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let _index = 0;
    let head = this.head;
    while (_index < index || head === null) {
        if (_index === index - 1) {
            head.next = head.next.next;
            return this.head;
        }
        head = head.next;
        _index ++;
    }
    return -1;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

var obj = new MyLinkedList()
// var param_1 = obj.get(index)
console.log(obj.addAtHead(3))
console.log(obj.addAtTail(2))
console.log(obj.addAtIndex(1,6))
console.log(obj.deleteAtIndex(1))