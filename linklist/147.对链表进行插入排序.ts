/*
 * @lc app=leetcode.cn id=147 lang=typescript
 *
 * [147] 对链表进行插入排序
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

function insertionSortList(head: ListNode | null): ListNode | null {
  if (head == null) return head
  let dummyHead = new ListNode(null, head)

  let lastSorted = head, cur = head.next

  while (cur != null) {
    if (lastSorted.val <= cur.val) {
      lastSorted = lastSorted.next
    } else {
      // 这里重新循环
      let prev = dummyHead
      while (prev.next.val <= cur.val) {
        prev = prev.next
      }
      // 从后往前指向
      lastSorted.next = cur.next
      cur.next = prev.next
      prev.next = cur
    }
    cur = lastSorted.next
  }
  return dummyHead.next
};
// @lc code=end

