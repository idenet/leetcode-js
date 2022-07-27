/*
 * @lc app=leetcode.cn id=220 lang=typescript
 *
 * [220] 存在重复元素 III
 */

/**
 * 
[1,5,9,1,5,9]
2
3
 * @param k 
 * @param t 
 * @returns 
 */
// @lc code=start
function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {

  let set = new Set<number>()
  for (let i = 0; i < nums.length; i++) {

    for (const v of set) {
      if (Math.abs(nums[i] - v) <= t) return true
    }


    set.add(nums[i])

    if (set.size === k + 1) {
      set.delete(nums[i - k])
    }
  }
  return false

  // let map = new Map()
  // for (let i = 0; i < nums.length; i++) {
  //   let arr = map.get(nums[i])
  //   if (arr != null && Math.abs(arr[1] - i) <= k) {
  //     return true
  //   }
  //   map.set(nums[i], i)
  // }
  // return false
};
console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0))
// @lc code=end

