import collections


class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        l = []
        for s in strs:
            l.append(str(sorted(s)))
        m = {}
        for i, s in enumerate(l):
            if s in m.keys():
                m[s].append(strs[i])
            else:
                m[s] = []
                m[s].append(strs[i])
        return list(m.values())
    
class Solution2:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        r = collections.defaultdict(list)
        for s in strs:
            l = [0] * 26
            for c in s:
                l[ord(c) - ord("a")] += 1
            r[tuple(l)].append(s)
        return r.values()
    
sol = Solution2()
s = sol.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
print(s)