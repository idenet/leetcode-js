/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// 递归
function reverseList(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) return head
  let last = reverseList(head.next)
  head.next.next = head
  head.next = null
  return last
};
// 迭代

function reverseList(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) return head
  let cur = head
  let prev = null
  while (cur != null) {
    let next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
};
// @lc code=end

