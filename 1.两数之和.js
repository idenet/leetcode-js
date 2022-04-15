/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 日 js 用 object 存的数据key变成字符串了， 用map吧
var twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (map.has(target - num)) {
      return [map.get(target - num), i]
    }
    map.set(num, i)
  }
}
// @lc code=end
