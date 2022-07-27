/*
 * @lc app=leetcode.cn id=451 lang=typescript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
function frequencySort(s: string): string {
  let map = new Map<string, number>()
  for (let i = 0; i < s.length; i++) {
    let count = map.get(s[i])
    map.set(s[i], count ? ++count : 1)
  }
  let arr = Array.from(map.entries()).sort((a, b) => b[1] - a[1])
  let res = ''
  for (const m of arr) {
    for (let i = 0; i < m[1]; i++) {
      res += m[0]
    }
  }
  return res
};

console.log(frequencySort('tree'))
// @lc code=end

