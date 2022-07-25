/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
function findKthLargestTs(nums: number[], k: number): number {
  const n = nums.length

  const quick = (l: number, r: number): void => {
    if (l > r) return
    let random = Math.floor((Math.random() * (r - l + 1))) + l // 随机选取一个标定点
    swap1(nums, random, l) // 将其和第一个元素替换作为标定值

    let pivotIndex = partition1(nums, l, r)

    if (n - k < pivotIndex) {
      quick(l, pivotIndex - 1)
    } else {
      quick(pivotIndex + 1, r)
    }
  }
  quick(0, n - 1)
  return nums[n - k] // n-k 等于pivotIndex 这个点
};

function partition1(nums: number[], l: number, r: number) {
  // [l, j] < v  [j+1, r] > v
  let j = r, i = l + 1
  // 根据标定点转移位置
  while (true) {
    while (i <= j && nums[i] < nums[l]) i++
    while (j >= i && nums[j] > nums[l]) j--
    if (i >= j) break
    swap1(nums, i, j)
    i++
    j--
  }
  // 替换标定点
  swap(nums, l, j)
  return j
}
function swap1(arr: number[], i: number, j: number) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
// @lc code=end

