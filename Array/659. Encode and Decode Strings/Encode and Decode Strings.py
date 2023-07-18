class Solution:
    """
    @param: strs: a list of strings
    @return: encodes a list of strings to a single string.
    """
    def encode(self, strs: list[str]):
        res = ""
        for s in strs:
            curr = ""
            for c in s:
               curr += str(ord(c))
               curr += "^"
            res += curr
            res += "|"
        return res

    """
    @param: str: A string
    @return: decodes a single string to a list of strings
    """
    def decode(self, str):
        res = []
        words = str.split("|")[:-1]
        for w in words:
            curr = []
            letters = w.split("^")[:-1]
            for l in letters:
                curr.append(chr(int(l)))
            full_word = "".join(curr)
            res.append(full_word)
        return res


sol = Solution()

r = sol.encode(["lint","code","love","you"])
print(r)
r2 = sol.decode(r)
print(r2)