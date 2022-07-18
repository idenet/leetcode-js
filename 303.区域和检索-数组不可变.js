/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  // 要清楚知道，sum[0] = 0 他不是第一个数的和
  this.sum = new Array(nums.length + 1)
  this.sum[0] = 0
  for (let i = 1; i < this.sum; i++) {
    this.sum[i] = this.sum[i - 1] + nums[i - 1]
  }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.sum[right + 1] - this.sum[left]
};


var nums = [-2, 0, 3, -5, 2, -1]


/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

