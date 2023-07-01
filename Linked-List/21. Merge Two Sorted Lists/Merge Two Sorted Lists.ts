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
    if (!list1) {
        return list2;
    }

    if (!list2) {
        return list1;
    }

    let h = null;
    let c = null;
    while (list1 || list2) {
        if (!list1) {
            c.next = list2
        } else if (!list2) {
            c.next = list2
        }
        
        const v1 = list1.val
        const v2 = list2.val
        let t = null
        if (v1 > v2) {
            t = list2
            list2 = list2.next
        } else {
            t = list1
            list1 = list1.next
        }

        if (!h) {
            h = t
            c = t
        }

        t.next = null
        c.next = t
        c = t
    }

    return h
};