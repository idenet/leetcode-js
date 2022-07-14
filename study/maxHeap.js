class MaxHeap {
  constructor(capacity = 10) {
    this.data = new Array(capacity)
  }
  size () {
    return this.data.length
  }


  heapify (arr) {
    for (let i = this.parent(arr.length - 1); i >= 0; i--) {
      this.siftDown(i)
    }
  }

  

  isEmpty () {
    return this.data.length == 0
  }
  // 父亲节点
  parent (index) {
    if (index == 0) {
      return
    }
    return Math.floor((index - 1) / 2)
  }

  leftChild (index) {
    return index * 2 + 1
  }

  rightChild (index) {
    return index * 2 + 2
  }

  add (e) {
    this.data.push(e)
    siftUp(this.size() - 1)
  }
  siftUp (k) {
    while (k > 0 && this.data[this.parent(k)] < this.data[k]) {
      this.swap(k, this.parent(k))
      k = this.parent(k) // 赋值新位置
    }
  }


  findMax () {
    if (this.size() === 0) return
    return this.data.length(0)
  }

  extracMax () {
    let ret = this.extracMax()

    this.swap(0, this.data.length - 1)
    this.data.pop()
    siftDown(0)

    return ret
  }

  siftDown (k) {
    while (this.leftChild(k) < this.size()) {
      let j = this.leftChild(k)
      if (j + 1 < this.size() && this.data[j + 1] > this.data[j]) {
        j = this.rightChild(k)
      }
      if (this.data[k] >= this.data[j]) break

      this.swap(k, j)
      k = j
    }
  }

  // 去除堆中最大的元素，并且替换成元素e
  replace (e) {
    let ret = this.findMax()
    this.data[0] = e
    this.siftDown(0)
    return ret
  }

  swap (i, j) {
    let t = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = t
  }
}
