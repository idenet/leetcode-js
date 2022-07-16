function bubbleSort (arr) {
  for (let i = 0; i + 1 < arr.length;) {
    // 1. 优化
    // let isSwapped = false
    let lastSwappedIndex = 0
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        lastSwappedIndex = j + 1
      }
    }
    // if (lastSwappedIndex == 0) break
    // 加上已经换的元素
    i = arr.length - lastSwappedIndex
  }
}


// 从后往前

function bubbleSort (arr) {
  let n = arr.length
  for (let i = 0; i < n - 1; i++) {
    let lastSwappedIndex = n - 1
    for (let j = n - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1)
        lastSwappedIndex = j - 1
      }
    }
    i = lastSwappedIndex
  }
  return arr
}


function swap (data, i, j) {
  let t = data[i]
  data[i] = data[j]
  data[j] = t
}

var arr = [41, 28, 16, 19, 17, 15, 62, 30, 22, 13]


console.log(bubbleSort(arr))

// 希尔排序，将元素的间距为n/2的所有元素左插入排序
// n/4
// n/8
// ... 1