/*
 * @lc app=leetcode.cn id=86 lang=typescript
 *
 * [86] 分隔链表
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

function partition(head: ListNode | null, x: number): ListNode | null {
  let dummyHead1 = new ListNode(-1, null)
  let dummyHead2 = new ListNode(-1, null)
  let small = dummyHead1, large = dummyHead2
  while (head != null) {
    if (head.val < x) {
      small.next = head
      small = small.next
    } else {
      large.next = head
      large = large.next
    }
    head = head.next
  }
  // 切断最后的large节点 可能指向源节点
  large.next = null
  small.next = dummyHead2.next
  return dummyHead1.next
};
// @lc code=end

