function insertSort (arr) {
  if (!arr) return []
  let length = arr.length - 1
  for (let i = 0; i <= length; i++) {
    for (let j = i; j - 1 >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1)
      } else {
        break
      }
    }
  }
  return arr
}

function swap (arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function insertSort2 (arr) {
  if (!arr) return []
  let length = arr.length - 1
  for (let i = 0; i <= length; i++) {
    let t = arr[i]
    let j
    for (j = i; j - 1 >= 0 & t < arr[j - 1]; j--) {
      arr[j] = arr[j - 1]
    }
    arr[j] = t
  }
  return arr
}

let a = [5, 2, 7, 3, 1, 6, 8, 4, 9]

console.log(insertSort2(a));