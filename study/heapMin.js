// 用最小堆排序

var arr = [41, 28, 16, 19, 17, 15, 62, 30, 22, 13]


function minHeap (arr) {
  if (arr.length <= 1) return

  // 找到最后一个非叶子节点的索引
  for (let i = Math.floor((arr.length - 2) / 2); i >= 0; i--) {
    siftUp(arr, i, arr.length)
  }
  console.log(arr);
  // 排序
  for (let i = arr.length - 1; i >= 0; i--) {
    swap(arr, 0, i)
    siftUp(arr, 0, i)
  }
  console.log(arr);
}
/**
 *
 *  
 * @param {*} arr
 * @param {*} k 第几个元素
 * @param {*} n 长度
 */
function siftUp (arr, k, n) {
  while (2 * k + 1 < n) {
    let j = 2 * k + 1
    // 找到右孩子
    if (j + 1 < n && arr[j + 1] < arr[j]) {
      j++
    }
    // 已经是最小值就不动
    if (arr[k] <= arr[j]) break
    swap(arr, k, j)
    k = j
  }
}

function swap (data, i, j) {
  let t = data[i]
  data[i] = data[j]
  data[j] = t
}

minHeap(arr)