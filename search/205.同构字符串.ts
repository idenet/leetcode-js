/*
 * @lc app=leetcode.cn id=205 lang=typescript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * "bbbaaaba"
"aaabbbba"
 * @param s 
 * @param t 
 * @returns 
 */
function isIsomorphic(s: string, t: string): boolean {
  let s1 = {}
  let s2 = {}

  for (let i = 0; i < s.length; i++) {
    let x = s[i], y = t[i]
    if ((s1[x] && s1[x] != y) || (s2[y] && s2[y] != x))
      return false
    s1[x] = y
    s2[y] = x
  }
  return true
};

console.log(isIsomorphic('bbbaaaba', 'aaabbbba'))
// @lc code=end

