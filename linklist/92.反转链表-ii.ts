/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * [92] 反转链表 II
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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (head == null || head.next == null) return

  let dummyHead = new ListNode(0, head)
  let prev = dummyHead
  for (let i = 1; i < left; i++) {
    prev = prev.next
  }
  let cur = prev.next
  for (let i = left; i < right; i++) {
    let next = cur.next

    cur.next = next.next
    next.next = prev.next
    prev.next = next
  }

  return dummyHead.next
};
// @lc code=end

