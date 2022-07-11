/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let l = 1, r = Math.max(...piles)
  while (l < r) {
    let mid = Math.floor((r - l) / 2) + l
    if (eatingTime(piles, mid) <= h) {
      r = mid
    } else {
      l = mid + 1
    }
  }
  return l
};


function eatingTime (piles, k) {
  let res = 0
  for (const item of piles) {
    res += Math.ceil(item / k)
  }
  return res
}

console.log(minEatingSpeed([3, 6, 7, 11], 8))
// @lc code=end

