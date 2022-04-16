/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
    let min = 0;
    let max = nums.length - 1;
    while(min < max) {
        let mid = (max + min) >> 1;
        let count = countRange(nums, min, mid);
        console.log(count, min, max, mid)
        if (count > (mid - min + 1)) {
            max = mid;
        }
        else {
            min = mid + 1;
        }
    }
    console.log(min);
    return min;
};

function countRange(nums, min, max) {
    let count = 0;
    for (let num = 0; num < nums.length; num ++) {
        if (nums[num] >= min && nums[num] <= max) {
            count ++;
        }
    }
    return count;
}

findRepeatNumber([0, 1, 2, 0, 4, 5, 6, 7, 8, 9]);


const reverseList = function(head) {
    let prev = null;
    let curr = head;
    while(curr) {
        const next = head.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

