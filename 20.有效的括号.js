/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const queue = []
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  for (let i = 0; i < s.length; i++) {
    const item = s[i]
    if (map[item]) {
      // 将对应的存进去
      queue.unshift(map[item])
    } else {
      // 存进去的相等
      if (queue[0] === item) {
        queue.shift()
      } else {
        return false
      }
    }
  }
  return queue.length === 0
};
// @lc code=end

