/*
 * @lc app=leetcode.cn id=148 lang=typescript
 *
 * [148] 排序链表
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

const toSort = (head, tail) => {
  if (head === null) {
    return head;
  }
  if (head.next === tail) {
    head.next = null;
    return head;
  }

  let slow = head, fast = head
  while (fast != tail) {
    slow = slow.next
    fast = fast.next
    if (fast != tail) fast = fast.next
  }
  let mid = slow
  return merge(toSort(head, mid), toSort(mid, tail))
}

const merge = (head1, head2) => {
  const dummyHead = new ListNode(null)
  let temp = dummyHead, temp1 = head1, temp2 = head2
  while (temp1 != null && temp2 != null) {
    if (temp1.val <= temp2.val) {
      temp.next = temp1
      temp1 = temp1.next
    } else {
      temp.next = temp2
      temp2 = temp2.next
    }
    temp = temp.next
  }
  if (temp1 != null) {
    temp.next = temp1
  }
  if (temp2 != null) {
    temp.next = temp2
  }

  return dummyHead.next
}

function sortList(head: ListNode | null): ListNode | null {
  return toSort(head, null)
};
// @lc code=end

