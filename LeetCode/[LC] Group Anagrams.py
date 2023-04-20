# 49. Group Anagrams. Python. LeetCode
class Solution:
    def areAnagrams(self, str1: str, str2: str):
        for c in str1:
            if str2.find(c) == -1:
                return False
        for c in str2:
            if str1.find(c) == -1:
                return False
        return True

    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        grouped_anagrams = []
        already_grouped = []
        for i, anagram in enumerate(strs):
            if already_grouped.__contains__(i):
                continue
            
            grouped_anagram = []
            for j, other_anagram in enumerate(strs):
                if i == j:
                    continue
                if already_grouped.__contains__(j):
                    continue
                if self.areAnagrams(anagram, other_anagram):
                    grouped_anagram.append(other_anagram)
                    already_grouped.append(j)
            grouped_anagram.append(anagram)
            already_grouped.append(i)
            grouped_anagrams.append(grouped_anagram)
        return grouped_anagrams

    
solution = Solution()
grouped = solution.groupAnagrams(["eat","tea","tan","ate","nat","bat"])
grouped2 = solution.groupAnagrams(["",""])
print(grouped)
print(grouped2)