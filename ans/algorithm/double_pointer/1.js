// 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

// 满足要求的四元组集合为：
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    const numsLen = nums.length;
    nums = nums.sort((a, b) => a - b);
    return getCorrent(numsLen, nums, [], target)
};

function getCorrent(numsLen, nums, res, target) {
    let map = new Map();
    for (let i = 0; i < numsLen - 3; i++) {
        for (let j = i + 1; j < numsLen - 2; j++) {
            for (let k = j + 1; k < numsLen - 1; k++) {
                for (let q = k + 1; q < numsLen; q++) {
                    if (nums[i] + nums[j] + nums[k] + nums[q] === target) {
                        let val = [nums[i], nums[j], nums[k], nums[q]];
                        if (!map.has(val.toString())) {
                            map.set(val.toString(), 1)
                            res.push(val);
                        }
                    }
                }
            }
        }
    }
    return res;
}

console.log(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0))

// [-3,-2,-1,0,0,1,2,3]
// 0
// 输出
// [[-1,-2,0,3],[-1,-2,0,3],[-1,-2,1,2],[-1,-3,1,3],[-1,0,0,1],[-2,-3,2,3],[-2,0,0,2],[-3,0,0,3],[-3,0,1,2],[-3,0,1,2]]
// 预期结果
// [[-3,-2,2,3],[-3,-1,1,3],[-3,0,0,3],[-3,0,1,2],[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

/**
 * @description
 * 排序 + 双指针
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let sns = nums.sort((a, b) => a - b);
    let len = sns.length;
    if (len < 4) return [];
    let ans = [];
    for (let i = 0; i < len - 3; i++) {
        // 如果当前循环值与前一个值相同，则判断存在重复，跳过此次循环
        if (i > 0 && sns[i] === sns[i - 1]) continue;
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
        if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) continue;
        for (let j = i + 1; j < len - 2; j++) {
            let left = j + 1;
            let right = len - 1;
            // 如果当前循环值与前一个值相同，则判断存在重复，跳过此次循环
            // 注意这里的判断条件
            // 因为当前j = i + 1
            // 这里判断的是后一个数字是否和现在的数字相等
            // 所以后一个数字的j至少为 j+1 = i+2
            // 所以此处的判断条件为j - 1 > i
            if (j - 1 > i && sns[j] === sns[j - 1]) continue;
            while (left < right) {
                if (sns[i] + sns[j] + sns[left] + sns[right] === target) {
                    ans.push([sns[i], sns[j], sns[left], sns[right]]);
                    while (left < right && sns[left] === sns[left + 1]) {
                        left++;
                    }
                    while (left < right && sns[right] === sns[right - 1]) {
                        right--;
                    }
                    // 执行到这里，左右指针都指向了最后一个与left值相同的位置，
                    // 此时我们还需要将左右指针再次向前进位，跳过最后一个重复值
                    // [1,1,1,1,2,3,4,5,6]
                    // 此时left指针在最后一个1处，还是与最开头的1重复，所以再次
                    // 加1,指针指向不重复的值
                    left++;
                    right--;
                } else {
                    sns[i] + sns[j] + sns[left] + sns[right] > target ?
                        right--
                        :
                        left++
                }
            }
        }
    }
    return ans;
}