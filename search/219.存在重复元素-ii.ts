/*
 * @lc app=leetcode.cn id=219 lang=typescript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  // let map = new Map()
  // for (let i = 0; i < nums.length; i++) {
  //   let index = map.get(nums[i])
  //   if (index != null && Math.abs(index - i) <= k) {
  //     return true
  //   }
  //   map.set(nums[i], i)
  // }
  // return false

  let set = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true
    set.add(nums[i])
    if (set.size === k + 1) {
      set.delete(nums[i - k])
    }
  }
  return false
};

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))
// @lc code=end

