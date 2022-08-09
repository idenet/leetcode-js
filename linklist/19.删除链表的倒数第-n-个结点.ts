/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummyHead = new ListNode(null, head)
  let prev = dummyHead.next
  for (let i = 1; i <= n; i++) {
    prev = prev.next
  }
  if (!prev) return head.next
  let cur = dummyHead.next
  while (prev.next != null) {
    prev = prev.next
    cur = cur.next
  }
  cur.next = cur.next.next
  return dummyHead.next
};
// @lc code=end

