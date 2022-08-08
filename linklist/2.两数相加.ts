/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let dummy = new ListNode(-1)
  let head = dummy
  let x = 0
  while (l1 !== null || l2 != null || x != 0) {
    let ll1 = l1 != null ? l1.val : 0
    let ll2 = l2 != null ? l2.val : 0

    let sum = ll1 + ll2 + x

    x = Math.floor(sum / 10)

    let sumNode = new ListNode(sum % 10)
    head.next = sumNode
    head = head.next

    if (l1 != null) l1 = l1.next
    if (l2 != null) l2 = l2.next
  }
  return dummy.next
};
// @lc code=end

