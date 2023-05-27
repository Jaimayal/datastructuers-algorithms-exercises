class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        pairs = {}
        for i, n in enumerate(nums):
            if target - n in pairs.keys():
                return [pairs.get(target - n), i]
            else:
                pairs[n] = i


sol = Solution()

print(sol.twoSum([2,7,11,15], 9))
print(sol.twoSum([3,2,4], 6))
print(sol.twoSum([3,3], 6))