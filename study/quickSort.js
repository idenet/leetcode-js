
function quickSort (arr) {
  sort(arr, 0, arr.length - 1)
  return arr
}


function sort (arr, l, r) {
  if (l >= r) return
  let p = partition(arr, l, r)
  sort(arr, l, p - 1)
  sort(arr, p + 1, r)
}


function partition (arr, l, r) {
  // 生成[l, r]随机的索引
  let p = Math.random(Math.random() * (r - l)) + l
  swap(arr, l, p) // 将标定点替换成随机值
  // arr[l+1, j] <v arr[j+i, r] >=v 
  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < arr[l]) {
      j++
      swap(arr, i, j)
    }
  }
  swap(arr, l, j)
  return j
}

// 双路排序
function partition2 (arr, l, r) {
  // 生成[l, r]随机的索引
  let p = Math.random(Math.random() * (r - l)) + l
  swap(arr, l, p) // 将标定点替换成随机值
  // arr[l+1, j] <v arr[j+i, r] >=v 
  let i = l + 1, j = r
  while (true) {
    while (i <= j && arr[i] < arr[l]) i++
    while (j >= i && arr[j] < arr[l]) j--
    // 循环结束条件
    if (i >= j) break

    // 当两者小于|大于的时候
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

var arr = [32, 12, 56, 78, 76, 45, 36]

console.log(quickSort(arr))