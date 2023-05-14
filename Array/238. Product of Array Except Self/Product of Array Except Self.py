class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        res = []
        for i, n in enumerate(nums):
            if i == 0:
                pre = 1
                res.append(pre)
            else:
                res.append(pre)
            pre = pre * n
        for i in range(len(nums)-1, -1, -1):
            n = nums[i]
            if i == len(nums)-1:
                pos = 1
                res[i] = res[i]*pos
            else:
                res[i] = res[i]*pos
            pos = pos * n
        return res

sol = Solution()
res = sol.productExceptSelf([1,2,3,4])
print(res)