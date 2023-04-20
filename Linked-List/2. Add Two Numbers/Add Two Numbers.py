class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def getNumber(self, l):
        pot = 1
        base = 10
        number = l.val
        print("Initial number: ", number)
        ne = l.next
        while ne:
            val = ne.val * (base ** pot)
            print("Adding ", val)
            number = number + val
            pot = pot + 1
            ne = ne.next
        return number

    def getListNode(self, n):
        first = None
        latest = None
        while n > 0:
            print("Current value of N", n)
            val = n % 10
            n = int(n/10)
            print("Current val", val)
            current = ListNode(val, None)
            self.printListNode(current)
            if latest is None:
                first = current
                latest = current
            else:
                latest.next = current
                latest = latest.next
        return first
    
    def printListNode(self, l):
        while l:
            print(l.val)
            l = l.next


sol = Solution()
# v = sol.getNumber(ListNode(2, ListNode(4, ListNode(3, None))))
# print(v)
# sol.getListNode(342)
l = sol.getListNode(807)
sol.printListNode(l)
l2 = sol.getListNode(1000000000000000000000000000001)
sol.printListNode(l2)
