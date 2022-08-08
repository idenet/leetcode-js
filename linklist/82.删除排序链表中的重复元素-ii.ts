/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * [82] 删除排序链表中的重复元素 II
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
  let dummyHead = new ListNode(-1, head)
  let prev = dummyHead // 虚拟头结点，用来重新衔接链表的
  let cur = head // 头结点用来循环和判断节点的相等
  while (cur != null && cur.next != null) {
    if (cur.val == cur.next.val) {
      while (cur.next && cur.val === cur.next.val) {
        cur = cur.next
      }
      prev.next = cur.next // 前面两个相等 所以要指向下一个
      cur = cur.next // 相同位移一个
    } else {
      prev = cur // 不相等直接指向下一个
      cur = cur.next
    }
  }

  return dummyHead.next
}
// @lc code=end
