# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        first = None
        r = 0
        resp = None
        node1 = l1 
        node2 = l2
        while node1 or node2:
            if node1 == None:
                v1 = 0
            else:
                v1 = node1.val
                node1 = node1.next
            
            if node2 == None:
                v2 = 0
            else:
                v2 = node2.val
                node2 = node2.next
            if r > 0:
                s = v1 + v2 + r
                r = 0
            else:
                s = v1 + v2
            if s > 9:
                r = int(s/10)
                s = int(s%10)
            if resp == None:
                resp = ListNode(s, None)
                first = resp
            else:
                resp.next = ListNode(s, None)
                resp = resp.next
        if r > 0:
            resp.next = ListNode(r, None)
            resp = resp.next
        return first