/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) swap(nums, i, k++)
  }
  console.log(nums)
  return k
};

function swap(nums: number[], i: number, k: number): void {
  let t = nums[i]
  nums[i] = nums[k]
  nums[k] = t
}

console.log(removeElement([3, 2, 2, 3], 3))
// @lc code=end

