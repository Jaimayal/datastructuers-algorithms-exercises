class Solution:
    def dailyTemperatures(self, temperatures: list[int]) -> list[int]:
        answer = 0 * len(temperatures)
        s = []
        for t, i in enumerate(temperatures):
            if len(s) == 0:
                s.append({t, i})
            v = s.pop()
            s.append(v)
            if s > v.t:
                answer[v.i] = i - v.i
            else:
                s.append({t, i})

sol = Solution()
sol.dailyTemperatures([73,74,75,71,69,72,76,73])