/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let i = 0, j = 1
  while (i < nums.length) {
    if (nums[i] == nums[i + 1]) {
      nums.splice(i + 1, 1)
    } else {
      i++
    }
  }
  console.log(nums)
  return nums.length
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
))
// @lc code=end

