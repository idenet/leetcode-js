/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) return head
  let dummyHead = new ListNode(-1, head)
  let cur = head
  let prev = head
  while (cur.next != null) {
    let next = cur.next
    if (prev.val == next.val) {
      cur.next = next.next
      next.next = null
    } else {
      cur = cur.next
      prev = cur
    }
  }
  return dummyHead.next
};
// @lc code=end

