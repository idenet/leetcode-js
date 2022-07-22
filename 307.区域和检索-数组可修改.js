/*
 * @lc app=leetcode.cn id=307 lang=javascript
 *
 * [307] 区域和检索 - 数组可修改
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.data = nums.slice()
  // 要清楚知道，sum[0] = 0 他不是第一个数的和
  this.sum = new Array(nums.length + 1)
  this.sum[0] = 0
  for (let i = 1; i < this.sum.length; i++) {
    this.sum[i] = this.sum[i - 1] + nums[i - 1]
  }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  this.data[i] = value
  for (let i = index + 1; i < this.sum.length; i++) {
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

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
// @lc code=end

