/*
 * @file:
 * @author: sunchao(sunchao15@baidu.com)
 * @Date: 2019-08-10 17:44:10
 * @LastEditors: sunchao
 * @LastEditTime: 2019-08-10 17:44:21
 */
// 两数之和

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};