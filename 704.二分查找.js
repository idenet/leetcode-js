/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return binarySearch(nums, 0, nums.length - 1, target)
};

// 递归
function binarySearch (nums, l, r, target) {
  // 退出递归的条件
  if (l > r) return -1
  let mid = Math.round((r - l) / 2) + l
  if (nums[mid] === target) {
    return mid
  }
  if (nums[mid] > target) {
    return binarySearch(nums, l, mid - 1, target)
  }

  return binarySearch(nums, mid + 1, r, target)
}

function search2 (nums, target) {
  let l = 0, r = nums.length - 1
  while (l <= r) {
    let mid = Math.round((r - l) / 2) + l
    if (mid === target) {
      return mid
    }
    if (nums[mid] < target) {
      r = mid - 1
    }
    l = mid + 1
  }
  return -1
}

// @lc code=end

