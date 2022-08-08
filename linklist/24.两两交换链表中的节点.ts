/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
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

function swapPairs(head: ListNode | null): ListNode | null {
  let dummyHead = new ListNode(null, head)
  let cur = dummyHead
  while (cur.next != null && cur.next.next != null) {
    let node1 = cur.next
    let node2 = cur.next.next

    cur.next = node2
    node1.next = node2.next // 修正1的指向
    node2.next = node1

    cur = node1

  }

  return dummyHead.next
};
// @lc code=end

