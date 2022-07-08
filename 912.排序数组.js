/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortArray = function (nums) {
//   let len = nums.length
//   for (let index = 0; index < len; index++) {
//     // 设定一个标记，如果为true表示已经有序，啧直接跳出
//     let flag = true
//     for (let j = 0; j < len - index - 1; j++) {
//       if(nums[j] > nums[j+1]) {
//         [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
//         flag = false
//       }
//     }
//     if(flag) break
//   }
//   return nums
// };
/**
 * 快速排序
 */
// var sortArray = function (nums) {
//   let len = nums.length
//   let preIndex, current
//   for (let i = 1; i < len; i++) {
//     // 拿到第一个
//     preIndex = i - 1
//     current = nums[i]
//     while (preIndex >= 0 && nums[preIndex] > current) {
//       nums[preIndex + 1] = nums[preIndex]
//       preIndex--
//     }
//     nums[preIndex + 1] = current
//   }
//   return nums
// }
// @lc code=end

