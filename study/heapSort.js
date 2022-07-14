// 对arr[0, n) 所形成的最大堆中，索引k的元素 执行siftdown
function siftDown (arr, k, n) {
  while (2 * k + 1 < n) {
    let j = 2 * k + 1
    // 右孩子 > 左孩子
    if (j + 1 < n && arr[j + 1] > arr[j]) {
      j++
    }
    if (arr[k] >= arr[j]) break
    swap(arr, k, j)
    k = j
  }
}

function swap (data, i, j) {
  let t = data[i]
  data[i] = data[j]
  data[j] = t
}


function heapSort (arr) {
  if (arr.length <= 1) return
  for (let i = Math.floor((arr.length - 2) / 2); i >= 0; i--) {
    siftDown(arr, i, arr.length)
  }
  // 排序
  for (let i = arr.length - 1; i >= 0; i--) {
    swap(arr, 0, i)
    siftDown(arr, 0, i)
  }
}
// 最大堆