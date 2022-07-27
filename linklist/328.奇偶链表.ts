/*
 * @lc app=leetcode.cn id=328 lang=typescript
 *
 * [328] 奇偶链表
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

function oddEvenList(head: ListNode | null): ListNode | null {
  // let dummyHead1 = new ListNode(-1, null)
  // let dummyHead2 = new ListNode(-1, null)
  // let small = dummyHead1, large = dummyHead2
  // let count = 1
  // while (head != null) {
  //   if (count % 2 !== 0) {
  //     small.next = head
  //     small = small.next
  //   } else {
  //     large.next = head
  //     large = large.next
  //   }
  //   count++
  //   head = head.next
  // }
  // large.next = null
  // small.next = dummyHead2.next
  // return dummyHead1.next
  if (head == null || head.next == null) return head
  let odd = head
  let evenHead = head.next
  let even = evenHead
  while (even && even.next != null) {
    odd.next = even.next
    odd = odd.next
    even.next = odd.next
    even = even.next
  }
  odd.next = evenHead
  return head
};
// @lc code=end

