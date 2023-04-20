class Solution {
    public boolean isPalindrome(String s) {
        String copy = s.replaceAll("[^0-9A-Za-z]*", "").toLowerCase();
        char[] copyArr = copy.toCharArray();
        
        for (int i = 0, j = copyArr.length -1; i < copyArr.length && j >= 0; i++, j--) {
            if (copyArr[i] != copyArr[j]) {
                return false;
            }
        }

        return true;
    }
}

class Test {
    public static void main(String[] args) {
        System.out.println(new Solution().isPalindrome("A man, a plan, a canal: Panama"));
    }
}