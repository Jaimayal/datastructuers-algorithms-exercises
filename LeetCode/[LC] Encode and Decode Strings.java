import java.util.Arrays;
import java.util.List;

// 659. LintCode Medium. Encode and Decode Strings
class Solution {
    /*
     * @param strs: a list of strings
     * 
     * @return: encodes a list of strings to a single string.
     */
    public String encode(List<String> strs) {
        StringBuilder str = new StringBuilder();
        for (String string : strs) {
            str.append(string + "#2");
        }
        return str.toString();
    }

    /*
     * @param str: A string
     * 
     * @return: dcodes a single string to a list of strings
     */
    public List<String> decode(String str) {
        // List<String> strs = new ArrayList<>();
        // StringBuilder string = new StringBuilder();
        // for (char c : str.toCharArray()) {
        // if (c == ':') {
        // strs.add(string.toString());
        // } else {
        // string.append(c);
        // }
        // }
        return Arrays.asList(str.split("#2"));
    }

}

class Test {
    // Test Cases
    public static void main(String[] args) {
        Solution sol = new Solution();
        List<String> strings = Arrays.asList("lint", "code", "love", "you");
        String encoded = sol.encode(strings);
        System.out.println(encoded);
        System.out.println(sol.decode(encoded));

    }
}
