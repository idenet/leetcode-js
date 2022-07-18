class SegmentTree {
  constructor(arr) {
    this.data = arr.slice()
    this.tree = []
    buildSegmentTree(0, 0, data.length - 1)
  }
  // 创建[l, r]的线段树
  buildSegmentTree (treeIndex, l, r) {
    if (l == r) {
      this.tree[treeIndex] = this.data[l]
    }
    let leftTree = this.leftChild(treeIndex)
    let rightTree = this.rightChild(treeIndex)

    let mid = Math.floor((r - l) / 2) + l

    this.buildSegmentTree(leftTree, l, mid)
    this.buildSegmentTree(rightTree, mid + 1, r)

    // this.tree[treeIndex] = this.tree[leftTree] + this.tree[rightTree]
  }
  // 完全二叉树中所有所表示的左孩子节点
  leftChild (index) {
    return 2 * index + 1
  }

  rightChild (index) {
    return 2 * index + 2
  }
  // 返回 [ql, qr]的值
  query (queryL, queryR) {
    return _query(treeIndex, 0, this.data.length - 1, queryL, queryR)
  }

  _query (treeIndex, l, r, queryL, queryR) {
    if (l == queryL && r == queryR) {
      return this.tree[treeIndex]
    }
    let mid = Math.floor((r - l) / 2) + l
    let leftTree = this.leftChild(treeIndex)
    let rightTree = this.rightChild(treeIndex)

    if (queryL >= mid + 1)
      return this._query(rightTree, mid + 1, r, queryL, queryR)
    else if (queryR <= mid)
      return this._query(leftTree, l, mid, queryL, queryR)

    let leftResult = this._query(leftTree, l, mid, queryL, mid)
    let rightResult = this._query(leftTree, mid + 1, e, mid + 1, queryR)
    return leftResult + rightResult
  }

  set (index, e) {
    _set(0, 0, this.data.length - 1, index, e)
  }

  _set (treeIndex, l, r, index, e) {
    if (l === r) {
      this.tree[treeIndex] = e
      return
    }
    let mid = Math.floor((r - l) / 2) + l
    let leftTree = this.leftChild(treeIndex)
    let rightTree = this.rightChild(treeIndex)

    if (index >= mid + 1) {
      this._set(rightTree, mid + 1, r, index, e)
    } else {
      this._set(leftTree, l, mid, index, e)
    }
  }
}