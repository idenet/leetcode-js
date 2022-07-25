/*
 * @lc app=leetcode.cn id=80 lang=typescript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  // let k = 0, count = 0, i = 0
  // while (i < nums.length) {
  //   if (nums[k] == nums[i]) {
  //     if (count < 2) {
  //       i++
  //       count++
  //     } else {
  //       nums.splice(i, 1)
  //     }
  //   } else {
  //     count = 0
  //     k = i
  //   }
  // }

  let maxRepeat = 2
  let slow = 1

  for (let fast = maxRepeat; fast < nums.length; fast++) {
    if (nums[slow - maxRepeat + 1] != nums[fast]) {
      slow++
      nums[slow] = nums[fast]
    }
  }
  return slow + 1
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]))
// @lc code=end

