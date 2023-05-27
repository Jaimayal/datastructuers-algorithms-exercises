# class Solution:
#     def trap(self, height: list[int]) -> int:
#         p1 = 0
#         ow = 0
#         while p1 < len(height):
#             if height[p1] > 0:
#                 found = False
#                 for b in range(height[p1], -1, -1):
#                     if found:
#                         break
#                     p2 = p1+1
#                     w = 0
#                     mw = 0
#                     while p2 < len(height):
#                         if height[p2] >= b:
#                             w = ((p2 - p1 - 1) * b) - mw
#                             p1 = p2-1
#                             found = True
#                             break
#                         else:
#                             mw += height[p2]
#                             p2 += 1
#                     ow += w
#             p1 += 1
#         return ow

class Solution:
    def trap(self, height: list[int]) -> int:
        if not height:
            return 0

        p1 = 0
        p2 = len(height)-1
        ml = height[p1]
        mr = height[p2]
        mw = 0
        while p1 < p2:
            if ml < mr:
                p1 += 1
                ml = max(ml, height[p1])
                mw += ml - height[p1]
            else:
                p2 -= 1
                mr = max(mr, height[p2])
                mw += mr - height[p2]
        return mw
            
            

            

sol = Solution()
v = sol.trap([0,1,0,2,1,0,1,3,2,1,2,1])
print(v)
v2 = sol.trap([4,2,0,3,2,5])
print(v2)
v2 = sol.trap([4,2,3])
print(v2)

# 1 4 
