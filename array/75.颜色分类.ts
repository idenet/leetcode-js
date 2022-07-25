/*
 * @lc app=leetcode.cn id=75 lang=typescript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  // 两个指针都要在范围外
  let zero: number = -1
  let two = nums.length
  for (let i = 0; i < two;) {
    if (nums[i] == 0) {
      ++zero
      swap(nums, zero, i)
      i++
    } else if (nums[i] == 1) {
      i++
    } else {
      two--
      swap(nums, two, i)
    }
  }
  console.log(nums)
};

function swap(nums: number[], j: number, k: number) {
  let t = nums[j]
  nums[j] = nums[k]
  nums[k] = t
}

console.log(sortColors([2, 0, 2, 1, 1, 0]))
// @lc code=end

