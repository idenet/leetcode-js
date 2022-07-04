/**
 * js下的归并排序
 */

function mergeSort (arr) {
  if (arr.length === 1) return arr
  let mid = Math.floor(arr.length / 2)
  let leftarr = arr.slice(0, mid)
  let rightarr = arr.slice(mid)
  return merge(mergeSort(leftarr), mergeSort(rightarr))
}

function merge (left, right) {
  let result = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }

  }
  // 如果有剩余就直接concat进去
  return result.concat(left).concat(right)
}

var arr = [32, 12, 56, 78, 76, 45, 36]

console.log(mergeSort(arr))