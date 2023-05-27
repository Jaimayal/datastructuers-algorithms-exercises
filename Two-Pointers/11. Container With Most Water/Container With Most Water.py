class Solution:
    def maxArea(self, height: list[int]) -> int:
        if not height:
            return 0
        l = 0
        r = len(height)-1
        ml = height[l]
        mr = height[r]
        a = (r - l) * min(ml, mr)
        while l < r:
            calc = (r - l) * min(ml, mr)
            print("current calc: ", calc)
            if calc > a:
                a = calc
            if min(ml, mr) == ml:
                l += 1
                ml = height[l]
            else:
                r -= 1
                mr = height[r]
        return a

sol = Solution()
v = sol.maxArea([1,8,6,2,5,4,8,3,7])
v2 = sol.maxArea([1,1])
print(v)
print(v2)