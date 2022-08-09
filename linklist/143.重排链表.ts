/*
 * @lc app=leetcode.cn id=143 lang=typescript
 *
 * [143] 重排链表
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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  if (head == null) return head
  let mid = searchMid(head)
  let l1 = head
  let l2 = mid.next
  mid.next = null // 分割l1 和l2
  l2 = reverseList(l2)
  merge(l1, l2)
};

function searchMid(head: ListNode | null): ListNode {
  let fast = head
  let slow = head
  while (fast.next != null && fast.next.next != null) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

// function reverseList(head: ListNode | null): ListNode {
//   let prev = null
//   let cur = head
//   while (cur != null) {
//     let next = cur.next
//     cur.next = prev
//     prev = cur
//     cur = next
//   }
//   return prev
// }
function reverseList(head: ListNode | null): ListNode {
  if (head == null) return head
  let last = reverseList(head.next)
  head.next.next = head
  head.next = null
  return last
}

function merge(l1: ListNode, l2: ListNode): ListNode {
  let l1temp = null
  let l2temp = null
  while (l1 != null && l2 != null) {
    l1temp = l1.next
    l2temp = l2.next

    l1.next = l2
    l1 = l1temp

    l2.next = l1
    l2 = l2temp
  }
}
// @lc code=end

