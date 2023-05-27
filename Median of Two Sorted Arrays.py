import math

class Solution:
    def findMedianSortedArrays(self, nums1: list[int], nums2: list[int]) -> float:
        arr = []
        l1 = len(nums1)
        l2 = len(nums2)
        tl = l1 + l2
        if tl % 2 == 0:
            dec = (l1 + l2) / 2
            low = int(dec-1)
            high = int(dec)
            i = 0
            if i < l1:
                v1 = nums1[i]
            else:
                v2 = None
            if i < l2:
                v2 = nums2[i]
            else:
                v2 = None
            while high > i+1 and v1 != None or v2 != None:
                if v2 != None and v1 != None:
                    ma = max(v1, v2)
                    mi = min(v1, v2)
                    arr.append(mi)
                    arr.append(ma)
                    print("Appended min", mi)
                    print("Appended max", ma)
                elif v1 != None:
                    arr.append(v1)
                elif v2 != None:
                    arr.append(v2)
                i = i + 1
                if i < l1:
                    v1 = nums1[i]
                else:
                    v2 = None
                if i < l2:
                    v2 = nums2[i]
                else:
                    v2 = None
            print(arr[low])
            print(arr[high])
            print(arr)
            return (arr[low] + arr[high]) / 2
        else:
            mid = math.floor((l1 + l2) / 2)
            i = 0
            if i < l1:
                v1 = nums1[i]
            else:
                v2 = None
            if i < l2:
                v2 = nums2[i]
            else:
                v2 = None
            while mid > i+1 and v1 or v2:
                if v2 != None and v1 != None:
                    ma = max(v1, v2)
                    mi = min(v1, v2)
                    arr.append(mi)
                    arr.append(ma)
                elif v1 != None:
                    arr.append(v1)
                elif v2 != None:
                    arr.append(v2)
                i = i + 1
                if i < l1:
                    v1 = nums1[i]
                else:
                    v2 = None
                if i < l2:
                    v2 = nums2[i]
                else:
                    v2 = None
            return arr[mid]
                
sol = Solution()
# m1 = sol.findMedianSortedArrays([1,3,5,7], [2,4,6])
# print(m1)
# m2 = sol.findMedianSortedArrays([1,2,3,5,6,7,8], [9,10,11,12,13,14,15])
m2 = sol.findMedianSortedArrays([0,0], [0,0])
print(m2)