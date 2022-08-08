/*
 * @lc app=leetcode.cn id=445 lang=typescript
 *
 * [445] 两数相加 II
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
  let stack1: number[] = [], stack2: number[] = []

  while (l1) {
    stack1.push(l1.val)
    l1 = l1.next
  }
  while (l2) {
    stack2.push(l2.val)
    l2 = l2.next
  }
  let x = 0 // 进位

  let head = null
  while (stack1.length || stack2.length || x != 0) {
    let a = stack1.length ? stack1.pop() : 0
    let b = stack2.length ? stack2.pop() : 0

    let sum = a! + b! + x

    x = Math.floor(sum / 10)

    let sumNode = new ListNode(sum % 10)
    sumNode.next = head
    head = sumNode
  }
  return head
};
// @lc code=end

