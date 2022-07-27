/*
 * @lc app=leetcode.cn id=350 lang=typescript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
  const map = new Map()
  for (let item of nums1) {
    let count = map.get(item)
    map.set(item, count ? ++count : 1)
  }
  let res: number[] = []
  for (let i = 0; i < nums2.length; i++) {
    let c = map.get(nums2[i])
    if (c! > 0) {
      res.push(nums2[i])
      map.set(nums2[i], --c!)
    }
  }
  return res
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
// @lc code=end

