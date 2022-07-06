/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let n = nums.length
  let lt = -1, i = 0, gt = n
  while (i < gt) {
    if (nums[i] == 0) {
      lt++
      swap(nums, lt, i)
      i++
    } else if (nums[i] == 1) {
      i++
    } else {
      gt--
      console.log(gt)
      swap(nums, gt, i)
    }
  }
  return nums
};

function swap (arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
// @lc code=end

