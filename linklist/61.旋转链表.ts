/*
 * @lc app=leetcode.cn id=61 lang=typescript
 *
 * [61] 旋转链表
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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  let dummyHead = new ListNode(null, head)
  let fast = dummyHead.next
  let last = dummyHead
  let count = 0
  while (last != null) {
    fast = fast.next
    count++
  }
  // 可能不存在
  if (count == 0) return dummyHead.next
  let modk = k % count
  // 当循环数和长度相同就不需要循环了
  if (modk == 0) return dummyHead.next
  for (let i = 0; i < modk; i++) {
    fast = fast.next
  }
  let slow = dummyHead.next
  while (fast.next != null) {
    slow = slow.next
    fast = fast.next
  }
  fast.next = dummyHead.next
  dummyHead.next = slow.next
  slow.next = null
  return dummyHead.next
};
// @lc code=end

