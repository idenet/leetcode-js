class UnionFind1 {
  id: number[]

  constructor(size: number) {
    let id = new Array(size)
    for (let i = 0; i < id.length; i++) {
      id[i] = i
    }
  }

  getSize() {
    return this.id.length
  }
  // 元素p和元素q是否是一个集合
  isConnected(p: number, q: number): boolean {
    return this.find(p) === this.find(q)
  }
  // 合并元素q和元素p的集合
  unionElments(p: number, q: number): void {
    let pid = this.find(p)
    let qid = this.find(q)
    if (pid === qid) return
    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] === pid)
        this.id[i] = qid!
    }
  }

  find(p: number): number | undefined {
    if (p < 0 && p >= this.id.length) return
    return this.id[p]
  }
}

class UnionFind2 {
  parent: number[]
  sz: number[]

  constructor(size: number) {
    this.parent = new Array(size)
    this.sz = new Array(size)
    for (let i = 0; i < size; i++) {
      this.parent[i] = i
      this.sz[i] = 1
    }
  }
  getSize() {
    return this.parent.length
  }
  // 找到根节点
  find(p: number): number {

    if (p < 0 && p >= this.parent.length) return -1

    while (p != this.parent[p]) {
      p = this.parent[p]
    }
    return p
  }
  // 元素p和元素q是否是一个集合
  isConnected(p: number, q: number): boolean {
    return this.find(p) === this.find(q)
  }
  unionElments(p: number, q: number): void {
    let pRoot = this.find(p)
    let qRoot = this.find(q)

    if (pRoot === qRoot) return

    if (this.sz[pRoot] < this.sz[qRoot]) {
      this.parent[pRoot] = qRoot
      this.sz[qRoot] += this.sz[pRoot]
    } else {
      this.parent[qRoot] = pRoot
      this.sz[pRoot] += this.sz[qRoot]
    }
  }

}


class UnionFind4 {
  parent: number[]
  rank: number[]

  constructor(size: number) {
    this.parent = new Array(size)
    this.rank = new Array(size)
    for (let i = 0; i < size; i++) {
      this.parent[i] = i
      this.rank[i] = 1
    }
  }
  getSize() {
    return this.parent.length
  }
  // 找到根节点
  find(p: number): number {

    if (p < 0 && p >= this.parent.length) return -1

    while (p != this.parent[p]) {
      p = this.parent[p]
    }
    return p
  }
  // 元素p和元素q是否是一个集合
  isConnected(p: number, q: number): boolean {
    return this.find(p) === this.find(q)
  }
  unionElments(p: number, q: number): void {
    let pRoot = this.find(p)
    let qRoot = this.find(q)

    if (pRoot === qRoot) return

    // rank低的集合合并到rank高的集合上
    if (this.rank[pRoot] < this.rank[qRoot]) {
      this.parent[pRoot] = qRoot
    }
    else if (this.rank[qRoot] < this.rank[pRoot]) {
      this.parent[qRoot] = pRoot
    } else {
      this.parent[qRoot] = pRoot
      this.rank[pRoot] += 1
    }
  }

}
// 路径压缩
class UnionFind5 {
  parent: number[]
  rank: number[]

  constructor(size: number) {
    this.parent = new Array(size)
    this.rank = new Array(size)
    for (let i = 0; i < size; i++) {
      this.parent[i] = i
      this.rank[i] = 1
    }
  }
  getSize() {
    return this.parent.length
  }
  // 找到根节点
  find(p: number): number {

    if (p < 0 && p >= this.parent.length) return -1

    while (p != this.parent[p]) {
      this.parent[p] = this.parent[this.parent[p]]
      p = this.parent[p]
    }
    return p
  }
  // 元素p和元素q是否是一个集合
  isConnected(p: number, q: number): boolean {
    return this.find(p) === this.find(q)
  }
  unionElments(p: number, q: number): void {
    let pRoot = this.find(p)
    let qRoot = this.find(q)

    if (pRoot === qRoot) return

    // rank低的集合合并到rank高的集合上
    if (this.rank[pRoot] < this.rank[qRoot]) {
      this.parent[pRoot] = qRoot
    }
    else if (this.rank[qRoot] < this.rank[pRoot]) {
      this.parent[qRoot] = pRoot
    } else {
      this.parent[qRoot] = pRoot
      this.rank[pRoot] += 1
    }
  }

}

// 第六版
class UnionFind6 {
  parent: number[]
  rank: number[]

  constructor(size: number) {
    this.parent = new Array(size)
    this.rank = new Array(size)
    for (let i = 0; i < size; i++) {
      this.parent[i] = i
      this.rank[i] = 1
    }
  }
  getSize() {
    return this.parent.length
  }
  // 找到根节点
  find(p: number): number {

    if (p < 0 && p >= this.parent.length) return -1

    if (p != this.parent[p]) {
      this.parent[p] = this.find(this.parent[p])
    }
    return this.parent[p]
  }
  // 元素p和元素q是否是一个集合
  isConnected(p: number, q: number): boolean {
    return this.find(p) === this.find(q)
  }
  unionElments(p: number, q: number): void {
    let pRoot = this.find(p)
    let qRoot = this.find(q)

    if (pRoot === qRoot) return

    // rank低的集合合并到rank高的集合上
    if (this.rank[pRoot] < this.rank[qRoot]) {
      this.parent[pRoot] = qRoot
    }
    else if (this.rank[qRoot] < this.rank[pRoot]) {
      this.parent[qRoot] = pRoot
    } else {
      this.parent[qRoot] = pRoot
      this.rank[pRoot] += 1
    }
  }

}