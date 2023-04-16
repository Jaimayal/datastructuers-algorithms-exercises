import heapq

# 347. Top K Frequent Elements. Python. LeetCode
class Solution:
    def topKFrequent(self, nums: list[int], k: int) -> list[int]:
        sorted_nums = sorted(nums)
        hm = {}
        for num in sorted_nums:
            if num in hm:
                hm[num] = hm.get(num) + 1
            else:
                hm[num] = 1
        result = sorted(hm.items(), key=lambda x:x[1], reverse=True)
        return [result[i][0] for i in range(k)]