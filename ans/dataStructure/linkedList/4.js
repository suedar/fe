/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @name: 归并排序
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function partition(lists) {
    switch(lists.length) {
        case 0:
            return null;
        case 1:
            return lists[0];
        case 2:
            return merge2Lists(lists[0], lists[1]);
        default:
            let mid = lists.length >> 1;
            return merge2Lists(partition(lists.slice(0, mid)),
                            partition(lists.slice(mid, lists.length)));
    }
}

function merge2Lists(l0, l1) {
    let p0 = l0,
        p1 = l1,
        c = new ListNode(null),
        pc = c;
    while(p0 || p1) {
        if (p0 && p1) {
            if(p0.val < p1.val) {
                pc.next = p0;
                p0 = p0.next;
            } else {
                pc.next = p1;
                p1 = p1.next;
            }
        } else if (p0) {
            pc.next = p0;
            break;
        } else if (p1) {
            pc.next = p1;
            break;
        }
        pc = pc.next;
    }
    return c.next;
}

var mergeKLists = function(lists) {
    return partition(lists);
};
