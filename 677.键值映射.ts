/*
 * @lc app=leetcode.cn id=677 lang=typescript
 *
 * [677] 键值映射
 */

class TrieENode {
  value: number
  treeMap: Map<string, TrieENode>
  constructor(value = 0) {
    this.value = value
    this.treeMap = new Map()
  }
}

// @lc code=start
class MapSum {
  root: TrieENode
  constructor() {
    this.root = new TrieENode()
  }

  insert(key: string, val: number): void {
    let cur = this.root
    for (let ch of key) {
      if (!cur.treeMap.has(ch))
        cur.treeMap.set(ch, new TrieENode())
      cur = cur.treeMap.get(ch)!
    }
    // 判断当前isword是否存在
    cur.value = val
  }

  sum(prefix: string): number {
    let cur = this.root
    for (let ch of prefix) {
      if (!cur.treeMap.has(ch)) return 0
      cur = cur.treeMap.get(ch)!
    }

    return this._sum(cur)
  }

  _sum(node: TrieENode): number {
    let res = node.value
    for (let c of node.treeMap.keys()) {
      res += this._sum(node.treeMap.get(c)!)
    }
    return res
  }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
// @lc code=end

