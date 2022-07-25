/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = 0, p2 = 0
  let sorted: number[] = []
  let arr = nums1.slice(0, m)
  while (p1 < m || p2 < n) {

    if (arr[p1] <= nums2[p2]) {
      sorted.push(arr[p1])
      p1++
    } else if (nums2[p2] < arr[p1]) {
      sorted.push(nums2[p2])
      p2++
    } else if (p1 === m) {

      sorted.push(nums2[p2])
      p2++
    } else if (p2 === n) {

      sorted.push(arr[p1])
      p1++
    }
  }
  for (let i = 0; i < m + n; i++) {
    nums1[i] = sorted[i]
  }
  console.log(nums1)
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
// @lc code=end

