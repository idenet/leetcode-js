/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = []
  // 升序排序
  nums.sort((a, b) => a - b)
  // 这里判断
  if (nums.length < 3 || nums[0] > 0) return []
  for (let i = 0; i < nums.length; i++) {
    // 3、对连续相同的元素去重 (第一个元素不执行)
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      // 三种情况
      let num = nums[i] + nums[left] + nums[right]

      if (num === 0) {
        result.push([nums[i], nums[left], nums[right]])
        // 这里判断一下相同的情况
        while (left < right && nums[left] === nums[left + 1]) left++
        while (left < right && nums[right] === nums[right - 1]) right--
        left++
        right--
      } else if (num < 0) {
        left++
      } else if (num > 0) {
        right--
      }
    }
  }
  return result
}

let nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums))
// @lc code=end
