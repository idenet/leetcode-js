// 选择排序，选择一个值，如果后面的值，比当前这个值小，则交换
// 那么 [0, i)是已经排序的，(i, n]是未排序的

function selectionSort (arr) {
  if (!arr) return []
  let length = arr.length - 1
  for (let i = 0; i < length; i++) {
    // 选择最小值的索引
    let minIndex = i
    for (let j = i; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    swap(arr, i, minIndex)
  }
  return arr
}

function swap (arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

let a = [5, 2, 7, 3, 1, 6, 8, 4, 9]

console.log(selectionSort2(a));

// 换种方式实现选择排序

function selectionSort2 (arr) {
  if (!arr) return []
  let length = arr.length - 1
  // [0, i)未排序 (i, n]已排序
  for (let i = length; i >= 0; i--) {
    let minIndex = i
    for (let j = i; j >= 0; j--) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    swap(arr, i, minIndex)
  }
  return arr
}