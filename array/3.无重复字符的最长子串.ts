/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let freq: number[] = new Array(256).fill(0)
  let l = 0, r = -1, res = 0  // 滑动窗口s [l, r]
  while (l < s.length) {
    if (r + 1 < s.length && freq[s[r + 1]] == 0) {
      freq[s[++r]]++
    } else {
      freq[s[l++]]--
    }
    res = Math.max(res, r - l + 1)
  }
  return res
};
// @lc code=end

