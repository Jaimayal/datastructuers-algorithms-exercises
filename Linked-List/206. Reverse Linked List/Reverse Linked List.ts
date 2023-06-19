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

function reverseList(head: ListNode | null): ListNode | null {
    let curr = head;
    let prev = null;

    if (!curr) {
        return null;
    }

    while (curr) {
        const n = curr.next;
        curr.next = prev;
        prev = curr;
        curr = n;
    }

    return curr;
};