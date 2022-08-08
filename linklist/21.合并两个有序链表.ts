/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let dummyHead = new ListNode(-1, null)
  let cur = dummyHead
  while(list1!= null && list2 !=null) {
    let temp = new ListNode(0, null)
    if(list1.val <= list2.val) {
      temp.val = list1.val
      list1 = list1.next
    }else {
      temp.val = list2.val
      list2 = list2.next
    }
    cur.next = temp
    cur = temp
  }

  if(list1 == null) {
    cur.next = list2
  } 
  if(list2 == null) {
    cur.next = list1
  }
  return dummyHead.next
};
// @lc code=end

