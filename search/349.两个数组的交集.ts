/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  let set = new Set(nums1)

  let result = new Set<number>()

  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) {
      result.add(nums2[i])
    }
  }
  return Array.from(result)
};
// @lc code=end

