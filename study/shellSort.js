
function shellSort (arr) {
  let h = Math.floor(arr.length / 2)
  while (h >= 1) {
    // 分割为几个数组， h个数组
    for (let start = 0; start < h; start++) {
      // [i, i+2h, i+3h]
      // 每个数据的间距是h
      for (let i = start + h; i < arr.length; i += h) {
        let t = arr[i]
        let j
        for (j = i; j - h >= 0 && t < arr[j - h]; j -= h) {
          arr[j] = arr[j - h]
        }
        arr[j] = t
      }
    }
    // 每次都缩小
    h = Math.floor(h / 2)
  }
  return arr
}


function shellSort2 (arr) {
  // let h = Math.floor(arr.length / 2)
  let h = 1
  while (h < arr.length) h = h * 3 + 1
  while (h >= 1) {
    // 对子数组混着处理 data[h, n)
    for (let i = h; i < arr.length; i++) {
      let t = arr[i]
      let j
      for (j = i; j - h >= 0 && t < arr[j - h]; j -= h) {
        arr[j] = arr[j - h]
      }
      arr[j] = t
    }
    // 每次都缩小
    h = Math.floor(h / 3)
  }
  return arr
}


var arr = [41, 28, 16, 19, 17, 15, 62, 30, 22, 13]


console.log(shellSort2(arr))
