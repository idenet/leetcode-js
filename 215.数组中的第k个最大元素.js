/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const n = nums.length;

  const quick = (l, r) => {
    if (l > r) return;//递归终止条件
    let random = Math.floor(Math.random() * (r - l + 1)) + l; //随机选取一个索引

    swap(nums, random, l); //将它和位置r的元素交换，让nums[r]作为基准元素

    //对基准元素进行partition
    let pivotIndex = partition(nums, l, r);
    // //进行partition之后，基准元素左边的元素都小于它 右边的元素都大于它
    // //如果partition之后，这个基准元素的位置pivotIndex正好是n-k 则找大了第k大的数
    // //如果n-k<pivotIndex,则在pivotIndex的左边递归查找
    // //如果n-k>pivotIndex，则在pivotIndex的右边递归查找
    if (n - k < pivotIndex) {
      quick(l, pivotIndex - 1);
    } else {
      quick(pivotIndex + 1, r);
    }
  };

  quick(0, n - 1);//函数开始传入的left=0，right= n - 1
  return nums[n - k]; //最后找到了正确的位置 也就是n-k等于pivotIndex 这个位置的元素就是第k大的数
};

function partition (arr, l, r) {
  // arr[l, j] <  arr[j+1, r] >v
  let j = r, i = l + 1
  while (true) {
    while (i <= j && arr[i] < arr[l]) i++
    while (j >= i && arr[j] > arr[l]) j--

    if (i >= j) break

    swap(arr, i, j)
    i++
    j--
  }
  // 替换标定点
  swap(arr, l, j)
  return j
}


function swap (arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
// 如果在 arr[l, r) 中查找
var findKthLargest2 = function (nums, k) {
  let n = nums.length
  let l = 0, r = n - 1
  while (l <= r) {
    let random = Math.floor(Math.random() * (r - l + 1)) + l; //随机选取一个索引

    swap(nums, random, l); //将它和位置r的元素交换，让nums[r]作为基准元素
    let p = partition(nums, l, r)
    if (n - k == p) {
      return nums[p]
    }
    if (n - k > p) {
      l = p + 1
    } else {
      r = p - 1
    }
  }
  return -1
}

function partition3 (nums, l, r) {
  let j = r, i = l + 1
  while (true) {
    while (i <= j && nums[i] < nums[l]) i++
    while (j >= i && nums[j] > nums[l]) j--
    if (i >= j) break
    swap(nums, i, j)
    i++
    j--
  }
  swap(nums, l, j)
  return j
}


console.log(findKthLargest2([3, 2, 1, 5, 6, 4, 9, 10, 45], 2));
// @lc code=end

