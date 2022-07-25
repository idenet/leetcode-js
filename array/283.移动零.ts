/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * 双指针解法
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  // k代表非0元素指针
  let k = 0
  // 第一种方式
  // for (let i = 0; i < nums.length; i++) {
  //   if (arr[i] != 0) {
  //     arr[k] = arr[i]
  //     k++
  //   }
  // }
  // for (let i = k; k < nums.length; k++) {
  //   arr[k] = 0
  // }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      if (i != k) swap(nums, i, k)
      k++
    }
  }
};

function swap(nums: number[], j: number, k: number) {
  let t = nums[j]
  nums[j] = nums[k]
  nums[k] = t
}

let arr = [0, 1, 0, 3, 12]
console.log(moveZeroes(arr))
// @lc code=end

