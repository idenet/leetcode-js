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
// 快排
var sortArray = function (nums) {
  if (nums.length <= 1) return nums
  // 取中间值下标
  let pivotIndex = Math.floor(nums.length / 2)
  // 获取中间值
  let pivot = nums.splice(pivotIndex, 1)[0]

  let left = [], right = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }
  return sortArray(left).concat([pivot], sortArray(right))
}
// @lc code=end

