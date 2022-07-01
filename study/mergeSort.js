/**
 * 归并排序
 * @param {*} arr 
 */
function mergeSort (arr) {
  // 归并排序说到底
  sort(arr, 0, arr.length - 1)
  return arr
}

function sort (arr, l, r) {
  if (l >= r) return
  let mid = parseInt((l + r) / 2)
  sort(arr, l, mid)
  sort(arr, mid + 1, r)
  merge(arr, l, mid, r)
}
// 合并两个有序的区间 arr[l, mid] 和arr[min+1, r]
function merge (arr, l, mid, r) {
  // slice 不包括end
  let temp = arr.slice(l, r + 1)
  // i, j分别指向两个区间的第一个元素
  let i = l, j = mid + 1

  for (let k = l; k <= r; k++) {
    // arr[i] 和 arr[j]
    // i可能越界
    if (i > mid) {
      // 等于初始值 也就是说，左边的长度比右边的长, 并且在长度具有偏移量
      arr[k] = temp[j - l]
      j++
    }
    else if (j > r) {
      arr[k] = temp[i - l];
      i++
    } else if (temp[i - l] < temp[j - l]) {
      arr[k] = temp[i - l]
      i++
    } else {
      arr[k] = temp[j - l]
      j++
    }
  }
}

var arr = [32, 12, 56, 78, 76, 45, 36]

console.log(mergeSort(arr))


function mergeSort2 (arr) {
  if (arr.length == 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  return merge(mergeSort2(left), mergeSort2(right))
}

function merge (leftArr, rightArr) {
  let result = []
  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift())
    } else {
      result.push(rightArr.shift())
    }
  }
  return result.concat(leftArr).concat(rightArr)
}