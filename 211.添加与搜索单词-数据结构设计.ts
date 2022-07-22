/*
 * @lc app=leetcode.cn id=211 lang=typescript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */


// 定义节点
class TrieeNode {
  isWord: boolean
  treeMap: Map<string, TrieeNode>
  constructor() {
    this.isWord = false
    this.treeMap = new Map()
  }
}

// @lc code=start
class WordDictionary {

  root: TrieeNode
  constructor() {
    this.root = new TrieeNode()
  }

  addWord(word: string): void {
    let cur = this.root
    for (let ch of word) {
      if (!cur.treeMap.has(ch))
        cur.treeMap.set(ch, new TrieeNode())
      cur = cur.treeMap.get(ch)!
    }
    // 判断当前isword是否存在
    if (!cur.isWord) cur.isWord = true
  }

  search(word: string): boolean {
    return this.match(this.root, word, 0)
  }

  match(node: TrieeNode, word: string, index: number): boolean {
    // 递归到底
    if (index === word.length) return node.isWord
    let ch = word.charAt(index)
    if (ch != '.') {
      if (!node.treeMap.has(ch)) return false
      return this.match(node.treeMap.get(ch)!, word, index + 1)
    } else {
      // 循环当前下的所有keys
      for (let char of node.treeMap.keys()) {
        if (this.match(node.treeMap.get(char)!, word, index + 1)) {
          return true
        }
      }
      return false
    }
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end

