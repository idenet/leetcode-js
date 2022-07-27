/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
  let set = new Set()
  while (n != 1 && !set.has(n)) {
    set.add(n) // 存储
    n = sum(n) // 求值
  }
  return n == 1
};

function sum(num: number): number {
  let nums = num + ''
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    res += Math.pow(+nums[i], 2)
  }
  return res
}

console.log(isHappy(2))
 // @lc code=end

