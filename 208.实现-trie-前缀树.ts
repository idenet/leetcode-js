/*
 * @lc app=leetcode.cn id=208 lang=typescript
 *
 * [208] 实现 Trie (前缀树)
 */

// 定义节点
class TrieNode {
  isWord: boolean
  treeMap: Map<string, TrieNode>
  constructor() {
    this.isWord = false
    this.treeMap = new Map()
  }
}

// @lc code=start
class Trie {

  root: TrieNode
  constructor() {
    this.root = new TrieNode()
  }

  insert(word: string): void {
    let cur = this.root
    for (let ch of word) {
      if (!cur.treeMap.has(ch))
        cur.treeMap.set(ch, new TrieNode())
      cur = cur.treeMap.get(ch)!
    }
    // 判断当前isword是否存在
    if (!cur.isWord) cur.isWord = true
  }
  search(word: string): boolean {
    let cur = this.root
    for (let ch of word) {
      if (!cur.treeMap.has(ch))
        return false
      cur = cur.treeMap.get(ch)!
    }
    return cur.isWord
  }

  startsWith(prefix: string): boolean {
    let cur = this.root
    for (let ch of prefix) {
      if (!cur.treeMap.has(ch))
        return false
      cur = cur.treeMap.get(ch)!
    }
    return true
  }
}

let trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"))   // 返回 True
console.log(trie.search("app"))    // 返回 False
console.log(trie.startsWith("app")) // 返回 True
console.log(trie.insert("app"))
console.log(trie.search("app"))     // 返回 True



/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

