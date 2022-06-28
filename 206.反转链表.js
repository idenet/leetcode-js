/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function (head) {
//   // 循环做法 
//   // prev节点指向 空；cur 指向当前头结点 
//   if (!head || head.next == null) {
//     return head
//   }
//   let prev = null
//   let cur = head

//   while (cur) {
//     // 暂存下一个节点
//     let tempNode = cur.next
//     cur.next = prev
//     prev = cur
//     cur = tempNode
//   }
//   return prev
// };
var reverseList = function (head) {
  // 递归的做法
  if (!head || head.next == null) {
    return head
  }
  let last = reverseList(head.next)
  head.next.next = head
  head.next = null
  return last
};
// @lc code=end

