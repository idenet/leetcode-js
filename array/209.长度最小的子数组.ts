/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
  // 滑动窗口
  let l = 0, r = -1, sum = 0, res = nums.length + 1 // 最大值+1
  while (l < nums.length) {
    if (r + 1 < nums.length && sum < target) {
      sum += nums[++r]
    } else {
      // 如果超过目标值啧右边的减去
      sum -= nums[l++]
    }

    if (sum >= target) {
      res = Math.min(res, r - l + 1)
    }
  }
  if (res === nums.length + 1) return 0
  return res
};
// @lc code=end

