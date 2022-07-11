/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 *
 * [1011] 在 D 天内送达包裹的能力
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  // 最低载重量应该是最大值
  // 最大载重量是所有一起
  let l = Math.max(...weights), r = weights.reduce((p, c) => p + c)
  while (l < r) {
    let mid = Math.floor((r - l) / 2) + l
    if (take(weights, mid) <= days) {
      r = mid
    } else {
      l = mid + 1
    }
  }
  return l
};

function take (weights, s) {
  let remain = s
  let res = 1
  for (const w of weights) {
    remain -= w
    if (remain < 0) {
      res++
      remain = s - w // 小于0 则表示只能运送这次的
    }
  }
  return res
}

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))
// @lc code=end

