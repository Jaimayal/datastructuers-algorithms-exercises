# class Solution:
#     def dailyTemperatures(self, temperatures: list[int]) -> list[int]:
#         answer = 0 * len(temperatures)
#         s = []
#         for t, i in enumerate(temperatures):
#             if len(s) == 0:
#                 s.append({t, i})
#             v = s.pop()
#             s.append(v)
#             if s > v.t:
#                 answer[v.i] = i - v.i
#             else:
#                 s.append({t, i})

class Solution:
    def dailyTemperatures(self, temperatures: list[int]) -> list[int]:
        if not temperatures:
            return []
        s = []
        r = [0] * len(temperatures)
        for i, t in enumerate(temperatures):
            if len(s) > 0:
                top = s.pop()
                s.append(top)
            else:
                s.append({ "val": t, "idx": i })
                continue
            if t > top["val"]:
                top = s.pop()
                while t > top["val"]:
                    print("Popped", top["val"])
                    r[top["idx"]] = i - top["idx"]
                    if len(s) > 0:
                        top = s.pop()
                    else:
                        break
                if t <= top["val"]:
                    s.append(top)
            s.append({ "val": t, "idx": i })
            print("Final S status", s)
            print("Final R status", r)
        return r

sol = Solution()
# d = sol.dailyTemperatures([73,74,75,71,69,72,76,73])
# print(d)
d2 = sol.dailyTemperatures([64,40,49,73,72,35,68,83,35,73,84,88,96,43,74,63,41,95,48,46,89,72,34,85,72,59,87,49,30,32,47,34,74,58,31,75,73,88,64,92,83,64,100,99,81,41,48,83,96,92,82,32,35,68,68,92,73,92,52,33,44,38,47,88,71,50,57,95,33,65,94,44,47,79,41,74,50,67,97,31,68,50,37,70,77,55,48,30,77,100,31,100,69,60,47,95,68,47,33,64])
print(d2)