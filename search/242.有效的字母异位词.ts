/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  let map = new Map<string, number>()
  for (let i = 0; i < s.length; i++) {
    let count = map.get(s[i])
    map.set(s[i], count ? ++count : 1)
  }
  for (let i = 0; i < t.length; i++) {
    let count = map.get(t[i])
    map.set(t[i], count ? --count : 1)
  }
  let res = 0
  for (const [k, v] of map) {
    res += v
  }
  return res == 0
};

console.log(isAnagram('anagram', 'nagaram'))
// @lc code=end

